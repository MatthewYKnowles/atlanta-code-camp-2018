import { TestBed } from '@angular/core/testing';

import { SubmissionService } from './submission.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('SubmissionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: SubmissionService = TestBed.get(SubmissionService);
    expect(service).toBeTruthy();
  });
});
