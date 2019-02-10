import { Component, OnInit, Input } from '@angular/core';
import { ArticleIndex } from '../../../models/article.model';
import { HelpersService } from '../../../services/helpers.service';

@Component({
  selector: 'article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  @Input() articles: ArticleIndex[] = [];

  constructor(private helpersService: HelpersService) {}

  ngOnInit() {}
}
