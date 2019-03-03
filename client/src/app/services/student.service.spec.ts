
import { StudentService } from './student.service';
import {TestBed} from '@angular/core/testing';
import {providers} from "../appProviders";
import {imports} from "../appImports";
import {declarations} from "../appDeclarations";

describe('StudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: declarations,
    imports: imports,
    providers : providers
  }));

  it('should be created', () => {
    const service: StudentService = TestBed.get(StudentService);
    expect(service).toBeTruthy();
  });
});
