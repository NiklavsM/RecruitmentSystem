import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SignupGraphComponent} from './signup-graph.component';
import {declarations} from "../../../appDeclarations";
import {imports} from "../../../appImports";
import {providers} from "../../../appProviders";

describe('SignupGraphComponent', () => {
  let component: SignupGraphComponent;
  let fixture: ComponentFixture<SignupGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: declarations,
      imports: imports,
      providers: providers
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
