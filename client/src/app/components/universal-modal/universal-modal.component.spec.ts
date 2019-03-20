import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UniversalModalComponent} from './universal-modal.component';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

describe('UniversalModalComponent', () => {
  let component: UniversalModalComponent;
  let fixture: ComponentFixture<UniversalModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UniversalModalComponent],
      providers: [NgbActiveModal]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversalModalComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
