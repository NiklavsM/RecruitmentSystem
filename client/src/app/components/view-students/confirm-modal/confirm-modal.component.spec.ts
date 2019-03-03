import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ConfirmModalComponent} from './confirm-modal.component';
import {declarations} from "../../../appDeclarations";
import {imports} from "../../../appImports";
import {providers} from "../../../appProviders";

describe('ConfirmModalComponent', () => {
  let component: ConfirmModalComponent;
  let fixture: ComponentFixture<ConfirmModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: declarations,
      imports: imports,
      providers: providers
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
