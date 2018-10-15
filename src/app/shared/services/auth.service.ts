export class AuthService {

  private isAuthenticated = false;

  constructor() {
  }

  public login() {
    this.isAuthenticated = true;
  }

  public logout() {
    this.isAuthenticated = false;
    window.localStorage.clear();
  }

  public isLoggedIn(): boolean {
    return  this.isAuthenticated;
  }
}
