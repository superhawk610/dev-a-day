import { Component, OnInit } from '@angular/core';
import { HelpersService } from '../../services/helpers.service';
import { SEOService } from '../../services/seo.service';
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
    private seoService: SEOService,
  ) {}

  async ngOnInit() {
    this.seoService.setDocumentTitle('Tags');
    this.tags = await this.articlesService.getTags();
  }
}
