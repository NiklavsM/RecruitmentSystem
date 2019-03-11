import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendEmailComponent } from './send-email.component';
import {declarations} from '../../../../appDeclarations';
import {imports} from '../../../../appImports';
import {providers} from '../../../../appProviders';

describe('SendEmailComponent', () => {
  let component: SendEmailComponent;
  let fixture: ComponentFixture<SendEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: declarations,
      imports: imports,
      providers: providers
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // xit('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
