import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelpersService } from '../../../services/helpers.service';
import { Tag } from '../../../models/tag.model';
import { SEOService } from '../../../services/seo.service';
import { ArticlesService } from '../../../services/articles.service';
import { ArticleIndex } from '../../../models/article.model';

@Component({
  selector: 'app-tag-view',
  templateUrl: './tag-view.component.html',
  styleUrls: ['./tag-view.component.scss'],
})
export class TagViewComponent implements OnInit {
  tagName: string;
  tag: Tag = null;
  articles: ArticleIndex[] = [];

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService,
    private helpersService: HelpersService,
    private seoService: SEOService,
  ) {
    this.tagName = this.route.snapshot.paramMap.get('tag');
  }

  ngOnInit() {
    this.seoService.setDocumentTitle(`#${this.tagName}`);
    this.loadTag();
    this.loadArticles();
  }

  async loadTag(): Promise<void> {
    this.tag = await this.articlesService.getTag({ name: this.tagName });
  }

  async loadArticles(): Promise<void> {
    this.articles = await this.articlesService.getArticles({
      tagName: this.tagName,
    });
  }
}
