import { Component, inject, signal } from '@angular/core';
import { Course } from '../models/Course';
import { courseService } from '../services/courses';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  courses = signal<Course[]>([]);
  error = signal<string | null>(null);
  sorted = false;

  courseService = inject(courseService);


  ngOnInit() {
    this.loadCourses();
  }

  async loadCourses() {
    try {
      const response = await this.courseService.fetchCourses();
      this.courses.set(response)
    } catch (error) {
      console.error(error);
      this.error.set("Kunde inte ladda data - försök igen senare");
    }
  }

  findID(id: Event) {
    const element = id.target as HTMLElement
    this.filterCourses(element.id)
  }

  //Filtrerar kurskod, namn och prog.
  async filterCourses(id: string) {
    try {
      const response = await this.courseService.fetchCourses();

      if (id === "code") {
        if (this.sorted == false) {
          response.sort((a, b) => a.code.localeCompare(b.code))
          this.courses.set(response)
          this.sorted = true;
        } else {
          response.sort((a, b) => b.code.localeCompare(a.code))
          this.courses.set(response)
          this.sorted = false;
        }
      }

      if (id === "name") {
        if (this.sorted == false) {
          response.sort((a, b) => a.coursename.localeCompare(b.coursename))
          this.courses.set(response)
          this.sorted = true;
        } else {
          response.sort((a, b) => b.coursename.localeCompare(a.coursename))
          this.courses.set(response)
          this.sorted = false;
        }
      }

      if (id === "progression") {
        if (this.sorted == false) {
          response.sort((a, b) => a.progression.localeCompare(b.progression))
          this.courses.set(response)
          this.sorted = true;
        } else {
          response.sort((a, b) => b.progression.localeCompare(a.progression))
          this.courses.set(response)
          this.sorted = false;
        }
      }
    } catch (err) {
      console.log(err)
    }

  }
}
