import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SendEmailComponent} from './components/view-students/view-student/send-email/send-email.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material';
import {ConfirmModalComponent} from './components/view-students/confirm-modal/confirm-modal.component';
import {PersonalityTraitDescriptionComponent} from './components/view-students/view-student/peronality-chart/personality-trait-description/personality-trait-description.component';
import {UniversalModalComponent} from './components/universal-modal/universal-modal.component';
import {imports} from "./appImports";
import {declarations} from "./appDeclarations";
import {providers} from "./appProviders";

@NgModule({
  entryComponents: [SendEmailComponent, ConfirmModalComponent, PersonalityTraitDescriptionComponent, UniversalModalComponent],
  declarations: declarations,
  imports: imports,
  exports: [
    MatDatepickerModule,
    MatCheckboxModule
  ],
  providers: providers,
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class AppModule {
}
