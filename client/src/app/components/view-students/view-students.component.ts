import {Component, OnInit, ViewChild} from '@angular/core';
import {StudentService} from "../../services/student.service";
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ConfirmModalComponent} from "./confirm-modal/confirm-modal.component";
import {SelectionModel} from "@angular/cdk/collections";

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.scss']
})
export class ViewStudentsComponent implements OnInit {
  students: any;
  displayedColumns = ['select', 'id', 'firstName', 'lastName', 'email', 'university'];
  dataSource: any;
  selection = new SelectionModel<Element>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private studentService: StudentService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.studentService.getStudents().subscribe(data => {
        this.students = data;
        this.dataSource = new MatTableDataSource(this.students);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      err => console.error(err),
      () => console.log('students loaded'));
  }

  private applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log("Filter ", this.dataSource);
  }

  private isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  private deleteStudents() {
    let studentsToDelete = [];
    let filter = this.dataSource.filter;
    this.selection.selected.forEach(item => {
      if (this.filteredDataContains(item.id)) {
        let index: number = this.students.findIndex(d => d === item);
        console.log(this.students.findIndex(d => d === item));
        this.dataSource.data.splice(index, 1);
        studentsToDelete.push(item.id);
      }
    });
    this.studentService.deleteStudents(studentsToDelete).subscribe(data => {
    }, error => {
    });
    console.log(" new this.dataSource ", this.dataSource);
    this.dataSource = new MatTableDataSource<Element>(this.dataSource.data);
    this.dataSource.filter = filter;
    this.selection = new SelectionModel<Element>(true, []);
  }

  private tryToDelete() {
    let studentsToDelete = [];
    this.selection.selected.forEach(item => {
      if (this.filteredDataContains(item.id)) {
        studentsToDelete.push(item);
      }
    });
    this.confirmDeletion(studentsToDelete);
  }

  private confirmDeletion(students: any[]) {
    const modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.result.then(result => {
      this.deleteStudents();
    }, reason => {
    });
    modalRef.componentInstance.students = students
  }

  private filteredDataContains(id: any) {
    // for(let filteredStudent in this.dataSource.filteredData){
    //   if(student.id === filteredStudent.id) return true;
    // }
    let contains = false;
    this.dataSource.filteredData.filter(s => s.id == id).forEach(student => {
      contains = true;
    });
    return contains;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  private masterToggle() {
    console.log("this.selection ", this.selection);
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.filteredData.forEach(row => this.selection.select(row));
  }


  private deleteConformation(student) {
    console.log("HERE studentId", student);
    const modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.componentInstance.student = student;
    modalRef.result.then(result => {
      this.deleteStudent(student.id);
      // this.router.navigateByUrl('/viewstudents');
    }, reason => {
    });
  }

  private deleteStudent(studentId) {
    this.studentService.deleteStudent(studentId).subscribe();
  }
}
