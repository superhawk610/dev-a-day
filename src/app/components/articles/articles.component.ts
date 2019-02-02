import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../services/title.service';
import { Article } from '../../models/article.model';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [];

  constructor(
    private articlesService: ArticlesService,
    private titleService: TitleService,
  ) {}

  async ngOnInit() {
    this.titleService.setDocumentTitle('Articles');
    this.articles = await this.articlesService.getArticles();
  }
}
