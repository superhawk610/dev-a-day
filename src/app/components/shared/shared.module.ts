import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleListComponent } from './article-list/article-list.component';
import { RouterModule } from '@angular/router';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { HeatmapComponent } from './heatmap/heatmap.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

@NgModule({
  declarations: [
    ArticleListComponent,
    BackToTopComponent,
    HeatmapComponent,
    SubscribeComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [
    ArticleListComponent,
    BackToTopComponent,
    HeatmapComponent,
    SubscribeComponent,
  ],
})
export class SharedModule {}
