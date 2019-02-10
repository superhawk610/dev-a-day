import { Component, OnInit } from '@angular/core';
import { SEOService } from '../../services/seo.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  constructor(private seoService: SEOService) {}

  ngOnInit() {
    this.seoService.setDocumentTitle('404');
  }
}
