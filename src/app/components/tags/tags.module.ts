import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagsRoutingModule } from './tags-routing.module';
import { TagsComponent } from './tags.component';
import { TagViewComponent } from './tag-view/tag-view.component';

@NgModule({
  declarations: [TagsComponent, TagViewComponent],
  imports: [
    CommonModule,
    TagsRoutingModule
  ]
})
export class TagsModule { }
