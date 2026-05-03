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

  courseService = inject(courseService);

  ngOnInit() {
    this.loadCourses();
  }

  async loadCourses() {
    try {
      const response = await this.courseService.fetchCourses();
      this.courses.set(response)
    } catch(error) {
      console.error(error);
      this.error.set("Kunde inte ladda data - försök igen senare");
    }
  }
}
