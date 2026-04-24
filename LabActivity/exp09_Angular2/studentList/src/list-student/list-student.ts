import { Component } from '@angular/core';
import { Services } from '../services/services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Student {
  name: string;
  age: number;
  course: string;
}

@Component({
  selector: 'app-list-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-student.html',
  styleUrls: ['./list-student.css'],
})
export class ListStudent {

  students: Student[] = [];

  // form fields
  newName: string = '';
  newAge: number = 0;
  newCourse: string = '';

  constructor(private studentService: Services) {}

  ngOnInit() {
    this.students = this.studentService.getStudent();
  }

  // ADD FUNCTION
  addStudent() {
    if (!this.newName || !this.newAge || !this.newCourse) {
      alert('Fill all fields');
      return;
    }

    const newStudent: Student = {
      name: this.newName,
      age: this.newAge,
      course: this.newCourse
    };

    this.students.push(newStudent);

    // clear form
    this.newName = '';
    this.newAge = 0;
    this.newCourse = '';
  }
}