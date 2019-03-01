import {Component, OnInit, ViewChild} from '@angular/core';
import {StudentService} from '../../services/student.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmModalComponent} from './confirm-modal/confirm-modal.component';
import {SelectionModel} from '@angular/cdk/collections';
import {FormControl, FormGroup} from '@angular/forms';
import {Globals} from '../../globals';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.scss']
})
export class ViewStudentsComponent implements OnInit {

  displayedColumns = ['select', 'firstName', 'lastName', 'university', 'course'];
  dataSource: any;
  selection = new SelectionModel<Element>(true, []);
  advancedSearchForm: FormGroup;
  advancedOptions = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public studentService: StudentService, public modalService: NgbModal, public  gl: Globals) {
  }

  ngOnInit() {
    const today = new Date();
    const fromDate = new Date(today.getFullYear() - 1, today.getMonth(), 0).toISOString().slice(0, 10);
    const toDate = new Date().toISOString().slice(0, 10);
    this.advancedSearchForm = new FormGroup({
      createdFrom: new FormControl(fromDate),
      createdTo: new FormControl(toDate),
      courses: new FormControl(),
      attachments: new FormControl(false),
      personalityTest: new FormControl(false)
    });
    this.studentService.getStudents(this.advancedSearchForm.value).subscribe(data => {
      this.initDataSource(data);
    });
  }

  private initDataSource(data: any, filter?: any) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filter = filter;
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private allSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  private deleteStudents() {
    const studentsToDelete = [];
    const filter = this.dataSource.filter;
    this.selection.selected.forEach(item => {
      if (this.filteredDataContains(item.id)) {
        const index: number = this.dataSource.data.findIndex(d => d === item);
        this.dataSource.data.splice(index, 1);
        studentsToDelete.push(item.id);
      }
    });
    this.studentService.deleteStudents(studentsToDelete).subscribe(data => {
    }, error => {
    });
    this.initDataSource(this.dataSource.data, filter);
    this.selection = new SelectionModel<Element>(true, []);

  }

  private tryToDelete() {
    const tryToDelete = [];
    this.selection.selected.forEach(item => {
      if (this.filteredDataContains(item.id)) {
        tryToDelete.push(item);
      }
    });
    this.confirmDeletion(tryToDelete);
  }

  private confirmDeletion(students: any[]) {
    const modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.result.then(result => {
      this.deleteStudents();
    }, reason => {
    });
    modalRef.componentInstance.students = students;
  }

  private filteredDataContains(id: any) {
    let contains = false;
    this.dataSource.filteredData.filter(s => s.id == id).forEach(student => {
      contains = true;
    });
    return contains;
  }

  // Selects all students if they are not all selected, otherwise clear all.
  public masterToggle() {
    this.allSelected() ?
      this.selection.clear() :
      this.dataSource.filteredData.forEach(row => this.selection.select(row));
  }

  public advancedSearch() {
    this.studentService.getStudents(this.advancedSearchForm.value).subscribe(data => {
      this.initDataSource(data);
    }, error => {
    });
  }

  public advancedOptionsSwitch() {
    this.advancedOptions = !this.advancedOptions;
  }

}
