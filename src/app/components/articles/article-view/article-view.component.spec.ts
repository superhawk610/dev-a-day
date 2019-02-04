import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleViewComponent } from './article-view.component';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PrevNextComponent } from '../prev-next/prev-next.component';

describe('ArticleViewComponent', () => {
  let component: ArticleViewComponent;
  let fixture: ComponentFixture<ArticleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        CommonModule,
        RouterTestingModule,
        HttpClientTestingModule,
        MarkdownModule.forRoot(),
      ],
      declarations: [ArticleViewComponent, PrevNextComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
