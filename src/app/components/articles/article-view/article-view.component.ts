import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  NavigationEnd,
  RouterEvent,
} from '@angular/router';
import { SEOService } from '../../../services/seo.service';
import { MaybeArticleIndex, Article } from '../../../models/article.model';
import { HelpersService } from '../../../services/helpers.service';
import { ArticlesService } from '../../../services/articles.service';
import { MarkdownService } from 'ngx-markdown';
import slugify from 'slugify';

declare const feather;
declare const $;

const CODE_LINE_HEIGHT = 21;

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss'],
})
export class ArticleViewComponent implements OnInit {
  article: Article;
  prevArticle: MaybeArticleIndex = null;
  nextArticle: MaybeArticleIndex = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articlesService: ArticlesService,
    private markdownService: MarkdownService,
    private helpersService: HelpersService,
    private seoService: SEOService,
  ) {}

  ngOnInit() {
    this.configureMarkdownRenderer();
    this.loadArticle();
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        // window doesn't exist in SSR environment
        if (typeof window !== 'undefined') {
          window.scrollTo({ top: 0, behavior: 'auto' });
          this.article = null;
          this.loadArticle();
        }
      }
    });
  }

  async loadArticle() {
    const slug = this.route.snapshot.paramMap.get('slug');
    const article = await this.articlesService.getArticle({ slug });
    [
      this.nextArticle,
      this.prevArticle,
    ] = await this.articlesService.getSurroundingArticles(article);
    this.seoService.setDocumentTitle(article.header);
    this.seoService.setDocumentMeta({
      description: article.preview,
      author: article.author,
      keywords: article.tags.map(t => t.name).join(','),
    });
    this.seoService.setDocumentTwitterMeta({
      site: '@superhawk610',
      title: article.header,
      description: article.preview,
      image: article.id,
    });
    this.article = article;

    // only attach listeners in browser environment
    if (typeof location !== 'undefined') {
      // wait for next tick
      setTimeout(() => {
        // insert Feather icons
        feather.replace();

        // add listeners to header permalinks
        $('markdown a[href^="#"]').on('click', this.scrollToHeader);

        // redirect internal links to Angular's router
        $('markdown a[href^="/"]').on(
          'click',
          this.internalRedirect.bind(this),
        );

        // highlight lines in code blocks
        // NOTE: we can't use ngx-markdown's built-in line highlight because
        // it only supports markdown directives entirely dedicated to a single
        // code block, whereas we're spreading code blocks throughout the
        // entire article
        if (this.article.body.lines) {
          for (const [codeBlockIndex, _lines] of Object.entries(
            this.article.body.lines,
          )) {
            const lines = _lines.replace(/[^0-9,\-]/g, '');
            const directives = lines.split(',');
            const pre = $(`markdown pre`).eq(codeBlockIndex);
            const lineNumbers = pre.find('.line-numbers-rows > span');
            const offsets: number[] = [];

            for (const directive of directives) {
              if (directive.indexOf('-') > -1) {
                const [start, end] = directive
                  .split('-')
                  .map(s => parseInt(s, 10));
                lineNumbers
                  .slice(start - 1, end)
                  .each((_, el: HTMLSpanElement) => {
                    el.classList.add('highlighted');
                  });
                offsets.push(
                  ...new Array(end - start + 1)
                    .fill(0)
                    .map((_, i) => i + start - 1),
                );
              } else {
                const offset = parseInt(directive, 10) - 1;
                const el: HTMLSpanElement = lineNumbers.eq(offset)[0];
                el.classList.add('highlighted');
                offsets.push(offset);
              }
            }

            for (const offset of offsets) {
              pre.append(
                `<div class="row-highlight" style="top: ${offset *
                  CODE_LINE_HEIGHT}px"></div>`,
              );
            }
          }
        }
      }, 0);

      // scroll to hash if present in location.pathname (wait a second to give
      // the DOM time to properly calculate image sizes and offset accordingly)
      setTimeout(() => {
        const hash = location.hash;
        if (hash) {
          try {
            const header = document.querySelector(hash);
            if (header) {
              header.scrollIntoView({
                block: 'start',
                inline: 'nearest',
                behavior: 'smooth',
              });
            }
          } catch {
            /* fail silently */
          }
        }
      }, 1000);
    }
  }

  internalRedirect(event: Event) {
    event.preventDefault();
    const anchor = event.target as HTMLAnchorElement;
    this.router.navigateByUrl(anchor.getAttribute('href'));
  }

  scrollToHeader(event: Event) {
    event.preventDefault();
    const anchor = (this as unknown) as HTMLAnchorElement;
    const permalink = $(anchor).attr('href');
    const header: HTMLHeadingElement = $(permalink)[0];

    // update browser location hash
    if (typeof history.pushState === 'function') {
      history.pushState(null, null, `${location.pathname}${permalink}`);
    } else {
      location.hash = permalink;
    }

    // scroll to header
    header.scrollIntoView({
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth',
    });
  }

  configureMarkdownRenderer() {
    const slugMap = {};

    // add permalink buttons to all heading
    this.markdownService.renderer.heading = (text: string, level: number) => {
      // h6 tags are headers for code blocks (used to display what file the
      // code should be contained in)
      if (level === 6) {
        return `
          <h6>
            <i data-feather="file-text"></i>
            ${text}
          </h6>
        `;
      }

      let slugModifier = 1;
      const slugBase = slugify(text.replace(/&amp;/g, 'and'))
        .toLowerCase()
        .replace(/[^a-z0-9\-]/g, '');
      let slug = slugBase;

      while (slugMap[slug]) {
        slug = `${slugBase}-${slugModifier}`;
        slugModifier++;
      }
      slugMap[slug] = true;

      return `
        <div class="section">
          <h${level} id="${slug}">${text}</h${level}>
          <a href="#${slug}">
            <i data-feather="link" height="18"></i>
          </a>
        </div>
      `;
    };

    // open links in a new tab
    this.markdownService.renderer.link = (
      href: string,
      title: string,
      text: string,
    ) => {
      if (title) {
        return `<a href="${href}" title="${title}" target="_blank">${text}</a>`;
      }
      return `<a href="${href}" target="_blank">${text}</a>`;
    };

    // transform relative img src links to pull from /assets
    this.markdownService.renderer.image = (
      href: string,
      title: string,
      text: string,
    ) => {
      if (title) {
        return `<img src="/assets/${href}" title="${title}" alt="${text}" />`;
      }
      return `<img src="/assets/${href}" alt="${text}" />`;
    };
  }
}
