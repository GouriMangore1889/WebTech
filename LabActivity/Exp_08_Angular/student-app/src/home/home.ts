import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  //interpollation
   fname:string="Gouri"
   myRoll:number=5
   imgURL:string="imgs/cat.jpg"
   cityArray:string[]=["kop","ichal","pune","mumbai"]

   isVisible: boolean = true;

    show() {
      this.isVisible = true;
    }

    hide() {
      this.isVisible = false;
    }
   

  showButton(){
    this.fname=this.fname
    alert(`my name is ${this.fname}`)

  }
  isLoggedIn: boolean = false;
  username: string = "Gouri";

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }
  
  istrue:boolean=false
  toggleState: boolean = false;

  toggle() {
    this.toggleState = !this.toggleState;

    if (this.toggleState) {
      this.istrue = true;
    } else {
      this.istrue = false;
    }
  }

  num1: number = 0;
  num2: number = 0;
}


