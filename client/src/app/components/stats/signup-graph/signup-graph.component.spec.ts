import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SignupGraphComponent} from './signup-graph.component';
import {declarations} from '../../../appDeclarations';
import {imports} from '../../../appImports';
import {providers} from '../../../appProviders';

fdescribe('SignupGraphComponent', () => {
  let component: SignupGraphComponent;
  let fixture: ComponentFixture<SignupGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: declarations,
      imports: imports,
      providers: providers
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reverse the array', () => {
    expect(component.flipArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
  });

  it('If empty array passed in should return empty array', () => {
    expect(component.flipArray([])).toEqual([]);
  });

  it('If passed in date should return 12 months intervals counting backwards from passed in date', () => {
    const date = new Date(2019, 2, 9);
    expect(component.getYearAsDateArray(date)).toEqual([
      {fromDate: '2019-3-01', toDate: '2019-3-31'}
      , {fromDate: '2019-2-01', toDate: '2019-2-31'}
      , {fromDate: '2019-1-01', toDate: '2019-1-31'}
      , {fromDate: '2018-12-01', toDate: '2018-12-31'}
      , {fromDate: '2018-11-01', toDate: '2018-11-31'}
      , {fromDate: '2018-10-01', toDate: '2018-10-31'}
      , {fromDate: '2018-9-01', toDate: '2018-9-31'}
      , {fromDate: '2018-8-01', toDate: '2018-8-31'}
      , {fromDate: '2018-7-01', toDate: '2018-7-31'}
      , {fromDate: '2018-6-01', toDate: '2018-6-31'}
      , {fromDate: '2018-5-01', toDate: '2018-5-31'}
      , {fromDate: '2018-4-01', toDate: '2018-4-31'}
    ]);
  });

});
