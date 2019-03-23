import {TestBed} from '@angular/core/testing';

import {EmailService} from './email.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('EmailService', () => {
  let service: EmailService;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [EmailService]
  }));

  beforeEach(() => {
    service = TestBed.get(EmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Send email works', () => {
    service.sendEmail({});
  });

});
