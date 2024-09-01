import { Component } from '@angular/core';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  userName: string = '';
  userEmail: string = '';
  userPassword: string = '';
  userId: string = uuidv4();
  constructor(public UserServiceObj: UserService, private router: Router) {}
  addUser() {
    this.UserServiceObj.addUser({
      id: this.userId,
      name: this.userName,
      email: this.userEmail,
      password: this.userPassword,
    })
      .then((response) => {
        console.log('User added successfully');
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        console.log('Error while adding user');
      });
  }
}
