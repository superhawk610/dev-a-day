import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';

declare const feather;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'dev-a-day';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event: RouterEvent) => {
      // load Feather icons
      if (event instanceof NavigationEnd) {
        feather.replace();
      }
    });
  }
}
