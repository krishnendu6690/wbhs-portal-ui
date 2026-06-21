import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  imports: [],
  templateUrl: './news.html',
  styleUrl: './news.scss',
})
export class News {

  news = [
    'Submit your Query/Grievance',
    'Doctor Details Available',
    'Online Enrollment Started'
  ];

}
