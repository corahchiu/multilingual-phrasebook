import { TestBed, inject } from '@angular/core/testing';

import { AddphraseService } from './addphrase.service';

describe('AddphraseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddphraseService]
    });
  });

  it('should be created', inject([AddphraseService], (service: AddphraseService) => {
    expect(service).toBeTruthy();
  }));
});
