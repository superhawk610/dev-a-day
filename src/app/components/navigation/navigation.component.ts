import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { NAVIGATION_ROUTES } from '../../../constants';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  routes = NAVIGATION_ROUTES;

  constructor(private router: Router) {}

  ngOnInit() {}

  routeIsActive(route: Route) {
    const path = route.path;
    const pathLength = path.length;
    return this.router.url.substr(0, pathLength) === path;
  }
}
