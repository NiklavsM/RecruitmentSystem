import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';
import {environment} from "../../environments/environment";

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: '4IacHPW1T0ALSXDjwcZnhwJNF329347Z',
    domain: 'niklavs.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'http://localhost:8080',
    redirectUri: environment.API_URL + '/logincallback',
    scope: 'openid recruiter admin'
  });

  constructor(public router: Router) {
  }

  public login(): void {
    console.log("ASKS for login");
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
 //   console.log("HERE 1");
    this.auth0.parseHash((err, authResult) => {
  //    console.log("HERE 1");
      if (authResult && authResult.accessToken && authResult.idToken) {
    //    console.log("HERE 2");
        window.location.hash = '';
        this.setSession(authResult);
    //    console.log("HERE 4");
        // this.router.navigate(['/home']);
      } else if (err) {
        // this.router.navigate(['/home']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
  //  console.log("HERE 3");
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
   // console.log("localStorage " , localStorage , " HEREEE", authResult);
    console.log("Result ", authResult);
    this.auth0.client.userInfo(authResult.accessToken, (err, profile) => {
      if (profile) {
        console.log("Profile ", profile, profile.nickname);
      }
    })

  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.auth0.logout();
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    // console.log("Checks is authenticated " + new Date().getTime() ," ", expiresAt);
    return new Date().getTime() < expiresAt;
  }

}
