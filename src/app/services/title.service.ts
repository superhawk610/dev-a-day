import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  prefix = 'dev-a-day';

  constructor(private titleService: Title) {}

  setDocumentTitle(title: string) {
    if (title) {
      return this.titleService.setTitle(`${this.prefix} | ${title}`);
    }
    return this.titleService.setTitle(this.prefix);
  }
}
