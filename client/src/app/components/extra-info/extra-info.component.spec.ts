import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraInfoComponent } from './extra-info.component';
import {declarations} from '../../appDeclarations';
import {imports} from '../../appImports';
import {providers} from '../../appProviders';

describe('ExtraInfoComponent', () => {
  let component: ExtraInfoComponent;
  let fixture: ComponentFixture<ExtraInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: declarations,
      imports: imports,
      providers: providers
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
