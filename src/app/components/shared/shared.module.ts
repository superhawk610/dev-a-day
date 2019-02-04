import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { RouterModule } from '@angular/router';
import { BackToTopComponent } from './back-to-top/back-to-top.component';

@NgModule({
  declarations: [ArticleListComponent, BackToTopComponent],
  imports: [CommonModule, RouterModule],
  exports: [ArticleListComponent, BackToTopComponent],
})
export class SharedModule {}
