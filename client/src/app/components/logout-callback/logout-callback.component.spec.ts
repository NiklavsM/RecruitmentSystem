import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LogoutCallbackComponent} from './logout-callback.component';
import {declarations} from '../../appDeclarations';
import {imports} from '../../appImports';
import {providers} from '../../appProviders';

describe('LogoutCallbackComponent', () => {
  let component: LogoutCallbackComponent;
  let fixture: ComponentFixture<LogoutCallbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: declarations,
      imports: imports,
      providers: providers
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
