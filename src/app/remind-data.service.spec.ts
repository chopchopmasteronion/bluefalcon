/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RemindDataService } from './remind-data.service';

describe('RemindDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemindDataService]
    });
  });

  it('should ...', inject([RemindDataService], (service: RemindDataService) => {
    expect(service).toBeTruthy();
  }));
});
