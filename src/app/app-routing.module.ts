import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'articles',
    loadChildren: './components/articles/articles.module#ArticlesModule',
  },
  { path: 'tags', loadChildren: './components/tags/tags.module#TagsModule' },
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
