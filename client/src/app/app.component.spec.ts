import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {declarations} from './appDeclarations';
import {imports} from './appImports';
import {providers} from './appProviders';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: declarations,
      imports: imports,
      providers: providers
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
