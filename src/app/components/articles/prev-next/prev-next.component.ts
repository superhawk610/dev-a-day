import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../../models/article.model';

@Component({
  selector: 'prev-next',
  templateUrl: './prev-next.component.html',
  styleUrls: ['./prev-next.component.scss'],
})
export class PrevNextComponent implements OnInit {
  @Input() prev: Article | null = null;
  @Input() next: Article | null = null;

  constructor() {}

  ngOnInit() {}
}
