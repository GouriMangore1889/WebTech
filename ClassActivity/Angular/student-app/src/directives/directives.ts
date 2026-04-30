import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [CommonModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  students=[
    {name:"gouri",marks:89},
    {name:"ravi",marks:60},
    {name:"rani",marks:90},
    {name:"sam",marks:93},
  ]
  show=true
}
