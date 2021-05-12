import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
  selector: "app-course-list",
  templateUrl: "./course-list.component.html"
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 25,
        name: "Angular",
        imageUrl: "",
        price: 120.5,
        code: "ANG - 20NG",
        duration: 40,
        rating: 10,
        releaseDate: "April, 22, 2021"
      },

      {
        id: 20,
        name: "React",
        imageUrl: "",
        price: 150.5,
        code: "REC - 25NG",
        duration: 50,
        rating: 10,
        releaseDate: "May, 7, 2021"
      }
    ];
  }
}
