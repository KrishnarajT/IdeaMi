import { Component, Input } from '@angular/core';
import { CourseModel } from 'src/app/models/CourseModel';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-display-course',
  templateUrl: './display-course.component.html',
  styleUrls: ['./display-course.component.css'],
})
export class DisplayCourseComponent {
  @Input() course: CourseModel = new CourseModel();

  constructor(public cartServiceObj: CartService) {}

  addToCart() {
    this.cartServiceObj.addToCart(this.course);
  }
}
