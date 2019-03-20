import {TestBed} from '@angular/core/testing';

import {EmailService} from './email.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('EmailService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [EmailService]
  }));

  it('should be created', () => {
    const service: EmailService = TestBed.get(EmailService);
    expect(service).toBeTruthy();
  });
});
