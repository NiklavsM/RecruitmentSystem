import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalityTestComponent } from './personality-test.component';
import {declarations} from '../../../appDeclarations';
import {imports} from '../../../appImports';
import {providers} from '../../../appProviders';

describe('PersonalityTestComponent', () => {
  let component: PersonalityTestComponent;
  let fixture: ComponentFixture<PersonalityTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: declarations,
      imports: imports,
      providers: providers
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalityTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
