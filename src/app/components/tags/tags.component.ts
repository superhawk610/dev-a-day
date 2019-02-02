import { Component, OnInit } from '@angular/core';
import { HelpersService } from '../../services/helpers.service';
import { TitleService } from '../../services/title.service';
import { ArticlesService } from '../../services/articles.service';
import { Tag } from '../../models/tag.model';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent implements OnInit {
  tags: Tag[] = [];

  constructor(
    private articlesService: ArticlesService,
    private helpersService: HelpersService,
    private titleService: TitleService,
  ) {}

  async ngOnInit() {
    this.titleService.setDocumentTitle('Tags');
    this.tags = await this.articlesService.getTags();
  }
}
