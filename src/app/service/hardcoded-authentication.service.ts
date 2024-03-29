import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    console.log('before' + this.IsUserLoggedIn())
      if (username === 'admin' && password ==='admin123') {
        sessionStorage.setItem('authenticateUser', username);
        console.log('after', this.IsUserLoggedIn());
        return true;
      }
      return false;
    }
  IsUserLoggedIn() {
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticateUser');
  }
}
