import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesComponent } from './articles.component';
import { ArticleViewComponent } from './article-view/article-view.component';

const routes: Routes = [
  { path: '', component: ArticlesComponent },
  { path: ':slug', component: ArticleViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesRoutingModule {}
