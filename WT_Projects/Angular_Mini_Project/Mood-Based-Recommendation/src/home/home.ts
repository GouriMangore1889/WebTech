import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoodService } from '../services/mood-service';
import { Suggestion } from '../suggestions/suggestions';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, Suggestion],
  templateUrl: './home.html',
  styleUrl:'./home.css'
})
export class Home {

  selectedMood: string = "";
  activities: string[] = [];

  constructor(private moodService: MoodService) {}

  showActivities() {
    this.activities = this.moodService.getActivities(this.selectedMood);
  }
}