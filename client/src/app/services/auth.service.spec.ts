import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {AuthService} from "./auth.service";

describe('AuthService', () => {
  let service: AuthService;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [AuthService]
  }));

  beforeEach(() => {
    service = TestBed.get(AuthService);
    service.auth0 = {
      authorize: () => {
      }, logout: () => {
      }, parseHash: (callback) => {
        callback("err", {accessToken: "token", idToken: "idToken"})
      },
      client: {
        userInfo: (token, callback) => {
          callback("err", {'https://recruitmentapp.com/roles': 'role'});
        }
      }
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Login works', () => {
    service.login();
  });

  it('Logout works', () => {
    service.logout();
    expect(service.isAuthenticated()).toBeFalsy();
  });

  it('isAuthenticated return false', () => {
    expect(service.isAuthenticated()).toBeFalsy();
  });

  it('Check Access with non existent role', () => {
    expect(service.hasAccess("FakeRole")).toBeFalsy();
  });

  it('Check Access with valid role fails if not authenticated', () => {
    localStorage.removeItem('roles');
    localStorage.setItem('roles', 'admin');
    expect(service.hasAccess("admin")).toBeFalsy();
  });

  it('Handle authentication works', () => {
    service.handleAuthentication();
  });
});
