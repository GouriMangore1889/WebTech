import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoodService {

  moodData = [
    { mood: "happy", activities: ["Go out", "Watch comedy"] },
    { mood: "sad", activities: ["Listen music", "Take rest"] },
    { mood: "bored", activities: ["Play game", "Watch movie"] }
  ];

  getActivities(mood: string) {
    const found = this.moodData.find(m => m.mood === mood);
    return found ? found.activities : [];
  }
}