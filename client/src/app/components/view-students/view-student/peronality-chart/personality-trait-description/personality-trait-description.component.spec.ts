import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalityTraitDescriptionComponent } from './personality-trait-description.component';
import {declarations} from '../../../../../appDeclarations';
import {imports} from '../../../../../appImports';
import {providers} from '../../../../../appProviders';

describe('PersonalityTraitDescriptionComponent', () => {
  let component: PersonalityTraitDescriptionComponent;
  let fixture: ComponentFixture<PersonalityTraitDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: declarations,
      imports: imports,
      providers: providers
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalityTraitDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
