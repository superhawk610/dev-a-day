import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  NavigationEnd,
  RouterEvent,
} from '@angular/router';
import { TitleService } from '../../../services/title.service';
import { MaybeArticle } from '../../../models/article.model';
import { HelpersService } from '../../../services/helpers.service';
import { ArticlesService } from '../../../services/articles.service';
import { MarkdownService } from 'ngx-markdown';
import slugify from 'slugify';

declare const feather;

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss'],
})
export class ArticleViewComponent implements OnInit {
  article: MaybeArticle;
  prevArticle: MaybeArticle = null;
  nextArticle: MaybeArticle = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articlesService: ArticlesService,
    private markdownService: MarkdownService,
    private helpersService: HelpersService,
    private titleService: TitleService,
  ) {}

  async ngOnInit() {
    this.configureMarkdownRenderer();
    this.loadArticle();
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'auto' });
        this.article = null;
        this.loadArticle();
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
    this.titleService.setDocumentTitle(article.header);
    this.article = article;

    // wait for next tick
    setTimeout(() => feather.replace(), 0);
  }

  configureMarkdownRenderer() {
    // add permalink buttons to all heading
    this.markdownService.renderer.heading = (text: string, level: number) => {
      const slug = slugify(text).toLowerCase();
      return `
        <div class="section">
          <h${level} id="${slug}">${text}</h${level}>
          <a href="${window.location.pathname}#${slug}">
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
