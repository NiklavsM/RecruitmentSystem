import {Globals} from "./globals";
import {StudentService} from "./services/student.service";
import {StatsService} from "./services/stats.service";
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./services/auth.guard";
import {APP_BASE_HREF} from "@angular/common";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

export const providers = [
  Globals, StudentService, StatsService, AuthService, AuthGuard, NgbActiveModal, {
    provide: 'apiKey',
    useValue: '86bofoe4nwku0q'
  }, {provide: APP_BASE_HREF, useValue: '/'}
];
