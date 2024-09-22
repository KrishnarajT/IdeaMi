import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseModel } from 'src/app/models/CourseModel';
import { CourseService } from './../../services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  @Input() course: CourseModel = new CourseModel();
    courseId: string = '';

  constructor(private route: ActivatedRoute, private courseServiceObj: CourseService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.courseId = params['id'];
      this.courseServiceObj.fetchCourseById(this.courseId).then((response) => {
        this.course = response;
      });
    });
  }
}
