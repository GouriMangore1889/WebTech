import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-live-input',
  imports: [FormsModule],
  templateUrl: './live-input.html',
  styleUrl: './live-input.css',
})
export class LiveInput {
  text = "";
}
