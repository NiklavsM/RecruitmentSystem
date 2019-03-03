import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ViewStudentsComponent} from './view-students.component';
import {declarations} from "../../appDeclarations";
import {imports} from "../../appImports";
import {providers} from "../../appProviders";

describe('ViewStudentsComponent', () => {
  let component: ViewStudentsComponent;
  let fixture: ComponentFixture<ViewStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: declarations,
      imports: imports,
      providers: providers
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudentsComponent);
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
