import { Injectable } from '@angular/core';
import { CourseModel } from '../models/CourseModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  allCourses: CourseModel[] = [];
  constructor(private httpClientObj: HttpClient) {}

  fetchAllCourses(): Promise<CourseModel[]> {
    return new Promise((resolve, reject) => {
      this.httpClientObj.get('http://localhost:3000/courses').subscribe(
        (response: any) => {
          this.allCourses = response;
          resolve(this.allCourses);
        },
      );
    });
  }

  
  fetchCourseById(courseId: string): Promise<CourseModel> {
    return new Promise<CourseModel>((resolve, reject) => {
      this.httpClientObj
        .get(`http://localhost:3000/courses/${courseId}`)
        .subscribe(
          (response: any) => {
            resolve(response.data.course);
          },
        );
    });
  }
}
