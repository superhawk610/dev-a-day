import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagsRoutingModule } from './tags-routing.module';
import { TagsComponent } from './tags.component';
import { TagViewComponent } from './tag-view/tag-view.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TagsComponent, TagViewComponent],
  imports: [SharedModule, CommonModule, TagsRoutingModule],
})
export class TagsModule {}
