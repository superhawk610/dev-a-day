import { TestBed } from '@angular/core/testing';

import { ArticlesService } from './articles.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ArticlesService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    }),
  );

  it('should be created', () => {
    const service: ArticlesService = TestBed.get(ArticlesService);
    expect(service).toBeTruthy();
  });
});
