import { TestBed, inject } from '@angular/core/testing';

import { MainLanguageColumnService } from './main-language-column.service';

describe('MainLanguageColumnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainLanguageColumnService]
    });
  });

  it('should be created', inject([MainLanguageColumnService], (service: MainLanguageColumnService) => {
    expect(service).toBeTruthy();
  }));
});
