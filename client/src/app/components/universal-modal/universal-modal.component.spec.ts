import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalModalComponent } from './universal-modal.component';
import {declarations} from '../../appDeclarations';
import {imports} from '../../appImports';
import {providers} from '../../appProviders';

describe('UniversalModalComponent', () => {
  let component: UniversalModalComponent;
  let fixture: ComponentFixture<UniversalModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: declarations,
      imports: imports,
      providers: providers
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
