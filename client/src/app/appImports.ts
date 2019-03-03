import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgbModalModule} from "@ng-bootstrap/ng-bootstrap";
import {
  MatCheckboxModule,
  MatDatepickerModule, MatFormFieldModule, MatInputModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule
} from "@angular/material";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {ChartsModule} from "ng2-charts";
import {FileUploadModule} from "ng2-file-upload";
import {ConfirmationPopoverModule} from "angular-confirmation-popover";
import {NgSelectModule} from "@ng-select/ng-select";

export const imports = [
  BrowserModule,
  AppRoutingModule,
  ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
  HttpClientModule,
  NgbModalModule,
  MatDatepickerModule,
  NoopAnimationsModule,
  MatNativeDateModule,
  ChartsModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  FileUploadModule,
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule,
  ConfirmationPopoverModule.forRoot({
    confirmButtonType: 'danger' // defaults
  }),
  NgSelectModule
];
