import { Component } from '@angular/core';
// CommonModule is needed for basic Angular directives like ngFor, ngIf
import { CommonModule } from '@angular/common';
import { StudentService } from '../services/student-service';

@Component({
  selector: 'app-list-student',

  // Standalone component (no need of NgModule)
  standalone: true,
  // Importing required modules
  imports: [CommonModule],
  templateUrl: './list-student.html',
})
export class ListStudent {

  // Array to store students data
  // BAD PRACTICE: using any[]. You should define an interface instead.
  students: any[] = [];

  // Dependency Injection of StudentService
  constructor(private studentService: StudentService) {}

  // Lifecycle hook - runs when component initializes
  ngOnInit() {

    // Calling service method to get student list
    this.students = this.studentService.getStudent();
  }
}