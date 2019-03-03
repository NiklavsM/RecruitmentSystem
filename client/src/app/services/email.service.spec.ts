import {TestBed} from '@angular/core/testing';

import {EmailService} from './email.service';
import {imports} from "../appImports";
import {providers} from "../appProviders";
import {declarations} from "../appDeclarations";

describe('EmailService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: declarations,
    imports: imports,
    providers: providers
  }));

  it('should be created', () => {
    const service: EmailService = TestBed.get(EmailService);
    expect(service).toBeTruthy();
  });
});
