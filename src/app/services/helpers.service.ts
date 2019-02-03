import { Injectable } from '@angular/core';
import { Tag } from '../models/tag.model';
import { parseISO, format } from 'date-fns';

const COLORS = ['primary', 'info', 'danger', 'warning', 'success'];

@Injectable({
  providedIn: 'root',
})
export class HelpersService {
  constructor() {}

  getTagColor(tag?: Tag) {
    // ids start at 1, indices start at 0
    return tag ? COLORS[(tag.id - 1) % COLORS.length] : '';
  }

  formatMediumDate(d: string): string {
    return format(parseISO(d), 'MMMM do, yyyy');
  }
}
