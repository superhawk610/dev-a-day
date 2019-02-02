import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TagsComponent } from './tags.component';
import { TagViewComponent } from './tag-view/tag-view.component';

const routes: Routes = [
  { path: '', component: TagsComponent },
  { path: ':tag', component: TagViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagsRoutingModule {}
