import { Component, OnInit } from '@angular/core';
import { SEOService } from '../../services/seo.service';
import { ArticleIndex } from '../../models/article.model';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  articles: ArticleIndex[] = [];

  constructor(
    private articlesService: ArticlesService,
    private seoService: SEOService,
  ) {}

  ngOnInit() {
    this.seoService.setDocumentTitle('Articles');
    this.loadArticles();
  }

  async loadArticles(): Promise<void> {
    this.articles = await this.articlesService.getArticles();
  }
}
