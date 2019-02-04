import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { MarkdownModule } from 'ngx-markdown';
import { SharedModule } from '../shared/shared.module';
import { PrevNextComponent } from './prev-next/prev-next.component';

@NgModule({
  declarations: [ArticlesComponent, ArticleViewComponent, PrevNextComponent],
  imports: [
    SharedModule,
    CommonModule,
    ArticlesRoutingModule,
    MarkdownModule.forChild(),
  ],
})
export class ArticlesModule {}
