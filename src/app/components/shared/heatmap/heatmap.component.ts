import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../../services/articles.service';
import { parseISO, format, addDays } from 'date-fns';

interface DateMap {
  [iso: string]: boolean;
}

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.scss'],
})
export class HeatmapComponent implements OnInit {
  readonly START_DATE = new Date(2019, 1, 1); // Feb 1, 2019

  tiles: boolean[] = [];

  constructor(private articlesService: ArticlesService) {}

  async ngOnInit() {
    const articles = await this.articlesService.getArticles();
    const publishMap: DateMap = {};
    for (const article of articles) {
      const iso = format(parseISO(article.publishedOn), 'yyyyMMdd');
      publishMap[iso] = true;
    }
    let date = new Date(this.START_DATE);
    this.tiles = new Array(365).fill(false).map(() => {
      date = addDays(date, 1);
      const iso = format(date, 'yyyyMMdd');
      return publishMap[iso];
    });
  }
}
