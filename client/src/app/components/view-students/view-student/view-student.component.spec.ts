import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewStudentComponent} from './view-student.component';
import {declarations} from '../../../appDeclarations';
import {imports} from '../../../appImports';
import {providers} from '../../../appProviders';

describe('ViewStudentComponent', () => {
  let component: ViewStudentComponent;
  let fixture: ComponentFixture<ViewStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: declarations,
      imports: imports,
      providers: providers
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('edit switch enables edit mode', () => {
  //   component.editSwitch();
  //   expect(component.editMode).toBe(true);
  // })

});
