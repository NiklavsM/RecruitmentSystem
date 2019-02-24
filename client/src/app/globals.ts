import {Injectable} from '@angular/core';

@Injectable()
export class Globals {
  public genders = ['Male', 'Female', 'Other'];
  public ethnicities = [
    'Caucasian', 'Latino/Hispanic',
    'Middle Eastern', 'African',
    'Caribbean', 'South Asian',
    'East Asian', 'Mixed',
    'Other'
  ];
}
