import {TestBed} from '@angular/core/testing';

import {SettingsService} from './settings.service';
import {providers} from '../appProviders';
import {imports} from '../appImports';
import {declarations} from '../appDeclarations';

describe('SettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: declarations,
    imports: imports,
    providers: providers
  }));

  it('should be created', () => {
    const service: SettingsService = TestBed.get(SettingsService);
    expect(service).toBeTruthy();
  });
});
