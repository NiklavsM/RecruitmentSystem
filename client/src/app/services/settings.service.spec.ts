import {TestBed} from '@angular/core/testing';

import {SettingsService} from './settings.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('SettingsService', () => {
  let service: SettingsService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [SettingsService]
  }));

  beforeEach(() => {
    service = TestBed.get(SettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Get settings works', () => {
    service.getSettings();
  });

  it('Set settings works', () => {
    service.setSettings({companyName: 'EastCompany'});
  });


});
