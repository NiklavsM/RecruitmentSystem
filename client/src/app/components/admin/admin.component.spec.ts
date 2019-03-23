import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminComponent} from './admin.component';
import {SettingsService} from '../../services/settings.service';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {of} from 'rxjs';
import {UniversalModalComponent} from '../universal-modal/universal-modal.component';
import {BrowserDynamicTestingModule} from '@angular/platform-browser-dynamic/testing';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let settingsService: SettingsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminComponent, UniversalModalComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule, NgbModalModule],
      providers: [SettingsService]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [UniversalModalComponent],
      }
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    settingsService = TestBed.get(SettingsService);
    spyOn(settingsService, 'getSettings').and.returnValue(of({}));
    spyOn(settingsService, 'setSettings').and.returnValue(of({}));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('NgInit should work', () => {
    component.ngOnInit();
  });

  it('SaveSettings not valid form', () => {
    component.saveSettings();
    expect(component.submitted).toEqual(true);
  });

  it('Open modal should work', () => {
    component.openModal('Test1');
  });


});
