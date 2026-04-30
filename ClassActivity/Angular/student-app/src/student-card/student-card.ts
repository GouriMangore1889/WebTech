import { Component } from '@angular/core';

@Component({
  selector: 'app-student-card',
  imports: [],
  templateUrl: './student-card.html',
  styleUrl: './student-card.css',
})
export class StudentCard {
  FullName:String="Gouri Mangore"
  course:String="AIML"
  imgUrl:String=""

  changeImage(){
    this.imgUrl=""
  }

}
