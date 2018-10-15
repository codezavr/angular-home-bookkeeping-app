import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth-component.html'
})
export class AuthComponent implements OnInit {

  public constructor(private router: Router) {}

  public ngOnInit() {
    this.router.navigate(['login']);
  }
}
