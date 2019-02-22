import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeatmapComponent } from './components/shared/heatmap/heatmap.component';

const routes: Routes = [
  {
    path: 'articles',
    loadChildren: './components/articles/articles.module#ArticlesModule',
  },
  { path: 'tags', loadChildren: './components/tags/tags.module#TagsModule' },
  { path: 'heatmap', component: HeatmapComponent },
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
