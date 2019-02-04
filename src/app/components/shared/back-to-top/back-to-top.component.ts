import { Component, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss'],
})
export class BackToTopComponent implements OnInit {
  scrollListener: Subscription;
  active = false;

  constructor() {}

  ngOnInit() {
    this.scrollListener = fromEvent(window, 'scroll').subscribe(
      this.onScroll.bind(this),
    );
  }

  ngOnDestroy() {
    this.scrollListener.unsubscribe();
  }

  onScroll() {
    const doc = document.documentElement;
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top >= 250) {
      this.active = true;
    } else {
      this.active = false;
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
