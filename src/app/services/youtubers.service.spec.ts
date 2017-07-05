import { TestBed, inject } from '@angular/core/testing';

import { YoutubersService } from './youtubers.service';

describe('YoutubersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YoutubersService]
    });
  });

  it('should be created', inject([YoutubersService], (service: YoutubersService) => {
    expect(service).toBeTruthy();
  }));
});
