import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  news = [
  'Submit your Query / Grievance',
  'Doctor Details Available',
  'Online Enrollment Started'
  ];
}
