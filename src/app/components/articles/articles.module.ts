import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [ArticlesComponent, ArticleViewComponent],
  imports: [CommonModule, ArticlesRoutingModule, MarkdownModule.forChild()],
})
export class ArticlesModule {}
