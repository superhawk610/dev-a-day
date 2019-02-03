import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../../models/article.model';
import { HelpersService } from '../../../services/helpers.service';

@Component({
  selector: 'article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  @Input() articles: Article[] = [];

  constructor(private helpersService: HelpersService) {}

  ngOnInit() {}
}
