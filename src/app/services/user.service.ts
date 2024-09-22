import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/UserModel';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  allUsers: UserModel[] = [];
  currentUser: UserModel = new UserModel();
  constructor(public httpClientObj: HttpClient) { }
  fetchAllUsers(): Promise<UserModel[]> {
    return new Promise((resolve, reject) => {
      this.httpClientObj.get('http://localhost:3000/users').subscribe(
        (response: any) => {
          this.allUsers = response;
          resolve(this.allUsers);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
  addUser(user: UserModel): Promise<UserModel> {
    return new Promise((resolve, reject) => {
      this.httpClientObj.post('http://localhost:3000/users', user).subscribe(
        (response: any) => {
          this.allUsers.push(response);
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
  updateUserCourses(user: UserModel): Promise<UserModel> {
    return new Promise((resolve, reject) => {
      this.httpClientObj
        .put(`http://localhost:3000/users/${user.id}`, user)
        .subscribe(
          (response: any) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );

      // update this class' allUsers array
      const index = this.allUsers.findIndex((u) => u.id === user.id);
      this.allUsers[index] = user;
    });
  }
}
