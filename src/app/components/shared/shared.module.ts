import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { RouterModule } from '@angular/router';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { HeatmapComponent } from './heatmap/heatmap.component';

@NgModule({
  declarations: [ArticleListComponent, BackToTopComponent, HeatmapComponent],
  imports: [CommonModule, RouterModule],
  exports: [ArticleListComponent, BackToTopComponent, HeatmapComponent],
})
export class SharedModule {}
