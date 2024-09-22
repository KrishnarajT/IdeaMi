import { Component } from '@angular/core';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/models/UserModel';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  user: UserModel = new UserModel();
  userId: string = uuidv4();

  signupFormGroup: FormGroup;

  constructor(public userServiceObj: UserService, private router: Router) {
    this.signupFormGroup = new FormGroup({
      name: new FormControl(this.user.name, Validators.required),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(this.user.password, Validators.required),
    });
  }

  addUser() {
    if (this.signupFormGroup.valid) {
      const { name, email, password } = this.signupFormGroup.value;
      this.userServiceObj.fetchAllUsers().then((response) => {
        console.log(response);

        // if the user exists, then redirect to login page
        // else add the user and redirect to login page
        console.log('User Name: ', this.user);
        if (!name || !email || !password) {
          alert('Please fill all the details');
          return;
        }

        if (this.userServiceObj.allUsers.length > 0) {
          const userExists = this.userServiceObj.allUsers.find(
            (user) => user.email === email
          );
          if (userExists) {
            alert('User already exists');
            return;
          }
        }

        this.userServiceObj
          .addUser({ id: this.userId, name, email, password, courses: [] })
          .then((response) => {
            console.log('User added successfully');
            this.router.navigate(['/login']);
          })
          .catch((error) => {
            console.error('Error adding user:', error);
          });
      });
    } else {
      alert('Please fill all the details correctly');
    }
  }
}
