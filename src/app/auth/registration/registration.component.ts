import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../shared/models/user.model';
import { UsersService } from '../../shared/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder, private usersService: UsersService, private router: Router) {
  }

  public ngOnInit() {
    this.form = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
      password: this.fb.control('', [Validators.required, Validators.minLength(6)]),
      name: this.fb.control('', Validators.required),
      agree: this.fb.control(false, Validators.requiredTrue)
    });
  }

  public forbiddenEmails(control: FormControl): Promise<any> {
    return new Promise((resolve) => {
      this.usersService.getUserByEmail(control.value)
        .subscribe((user: User) => {
        if (user) {
          resolve({
            forbiddenEmail: true
          });
        } else {
          resolve(null);
        }
      });
    });
  }

  public onSubmit() {
    if (this.form.valid) {
      const {email, password, name} = this.form.value;
      const newUser = new User(email, password, name);

      this.usersService.createNewUser(newUser)
        .subscribe((user: User) => {
          this.router.navigate(['/login'], {
            queryParams: {
              nowCanLogin: true
            }
          });
        });
    }
  }
}
