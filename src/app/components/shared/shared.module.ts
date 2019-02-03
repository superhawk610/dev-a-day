import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ArticleListComponent],
  imports: [CommonModule, RouterModule],
  exports: [ArticleListComponent],
})
export class SharedModule {}
