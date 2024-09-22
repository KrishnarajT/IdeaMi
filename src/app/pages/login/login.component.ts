import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/UserModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userLoginForm: FormGroup;
  user: UserModel = new UserModel();

  constructor(public userServiceObj: UserService, private router: Router) {
    this.userLoginForm = new FormGroup({
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(this.user.password, Validators.required),
    });
  }

  loginUser() {
    if (this.userLoginForm.valid) {
      const { email, password } = this.userLoginForm.value;

      if (!email || !password) {
        alert('Please fill all the details');
        return;
      }
      this.userServiceObj.fetchAllUsers().then((response) => {
        if (this.userServiceObj.allUsers.length > 0) {
          const userExists = this.userServiceObj.allUsers.find(
            (user) => user.email === email && user.password === password
          );
          if (userExists) {
            // save user to local storage
            localStorage.setItem('user', JSON.stringify(userExists));
            this.userServiceObj.currentUser = userExists;
            this.router.navigate(['/dashboard']);
          } else {
            alert('Invalid credentials');
          }
        } else {
          alert('User does not exist');
        }
      });
    }
  }
}
