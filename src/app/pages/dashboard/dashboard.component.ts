import { Component, OnInit } from '@angular/core';
import { CourseModel } from 'src/app/models/CourseModel';
import { CourseService } from 'src/app/services/course.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  thisUserCourses: CourseModel[] = [];
  canBuyCourses: CourseModel[] = [];

  constructor(
    public courseServiceObj: CourseService,
    public userServiceObj: UserService
  ) {}

  ngOnInit(): void {
    const user = this.userServiceObj.currentUser;
    this.courseServiceObj.fetchAllCourses().then((response) => {
      // go through the ids of all the courses
      // if the id exists in the users courses list, then add it to thisUserCourses
      // else add it to canBuyCourses
      this.thisUserCourses = response.filter((course) =>
        user.courses.includes(course.id)
      );
      this.canBuyCourses = response.filter(
        (course) => !user.courses.includes(course.id)
      );
    });
  }
}
