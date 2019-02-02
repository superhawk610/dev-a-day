import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleService } from '../../../services/title.service';
import { Article } from '../../../models/article.model';
import { HelpersService } from '../../../services/helpers.service';
import { MarkdownService } from 'ngx-markdown';
import { ArticlesService } from '../../../services/articles.service';
import slugify from 'slugify';

declare const feather;

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss'],
})
export class ArticleViewComponent implements OnInit {
  article: Article;

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService,
    private markdownService: MarkdownService,
    private helpersService: HelpersService,
    private titleService: TitleService,
  ) {}

  async ngOnInit() {
    this.configureMarkdownRenderer();
    const slug = this.route.snapshot.paramMap.get('slug');
    const article = await this.articlesService.getArticle({ slug });
    this.titleService.setDocumentTitle(article.header);
    this.article = article;
  }

  ngAfterViewInit() {
    // wait until the next tick
    setTimeout(() => feather.replace(), 0);
  }

  configureMarkdownRenderer() {
    this.markdownService.renderer.heading = (text: string, level: number) => {
      const slug = slugify(text);
      return `
        <div class="section">
          <h${level} id="${slug}">${text}</h${level}>
          <a href="${window.location.pathname}#${slug}">
            <i data-feather="link" height="18"></i>
          </a>
        </div>
      `;
    };
  }
}
