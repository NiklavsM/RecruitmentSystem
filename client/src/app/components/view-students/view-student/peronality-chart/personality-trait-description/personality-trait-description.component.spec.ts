import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PersonalityTraitDescriptionComponent} from './personality-trait-description.component';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

describe('PersonalityTraitDescriptionComponent', () => {
  let component: PersonalityTraitDescriptionComponent;
  let fixture: ComponentFixture<PersonalityTraitDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalityTraitDescriptionComponent],
      providers: [NgbActiveModal]
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
