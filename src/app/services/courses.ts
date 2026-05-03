import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/Course';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class courseService {

  private url: string = "https://webbutveckling.miun.se/files/ramschema.json"
  
  http = inject(HttpClient)


  async fetchCourses(): Promise<Course[]> {
    const courses = this.http.get<Course[]>(this.url);

    return await firstValueFrom(courses);
  }
}
