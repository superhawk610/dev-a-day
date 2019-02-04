import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevNextComponent } from './prev-next.component';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PrevNextComponent', () => {
  let component: PrevNextComponent;
  let fixture: ComponentFixture<PrevNextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        CommonModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [PrevNextComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
