import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCourseComponent } from './display-course.component';

describe('DisplayCourseComponent', () => {
  let component: DisplayCourseComponent;
  let fixture: ComponentFixture<DisplayCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayCourseComponent]
    });
    fixture = TestBed.createComponent(DisplayCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
