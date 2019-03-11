import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddStudentComponent} from './add-student.component';
import {declarations} from '../../appDeclarations';
import {imports} from '../../appImports';
import {providers} from '../../appProviders';

describe('AddStudentComponent', () => {
  let component: AddStudentComponent;
  let fixture: ComponentFixture<AddStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: declarations,
      imports: imports,
      providers: providers
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
