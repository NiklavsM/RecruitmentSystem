import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {SettingsService} from "./services/settings.service";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {RouterModule} from "@angular/router";
import {AuthService} from "./services/auth.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let settingsService: SettingsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, NavbarComponent],
      imports: [HttpClientTestingModule, RouterModule.forRoot([])],
      providers: [SettingsService, AuthService]
    }).compileComponents();
  }));

  // {
  //   provide: SettingsService,
  //     useValue: { getSettings: of({}) }
  // }

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    settingsService = TestBed.get(SettingsService);
    // spyOn(settingsService, 'getSettings').and.returnValue(Observable.);
  });


  it('Should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('Should initialize the app', () => {
    component.ngOnInit();
  });

  it('NavBar should return false', () => {
    // expect(component.navBarOn()).toEqual(false);
  });

});
