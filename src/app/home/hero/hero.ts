import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  news = [
    'Submit your Query / Grievance',
    'Doctor Details Available',
    'Online Enrollment Started'
  ];
}
