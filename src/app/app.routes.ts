import { Routes } from '@angular/router';

import { Home } from './home/home';
import { AboutUs } from './pages/under-home/about-us/about-us';
import { CircularMemos } from './pages/under-home/circular-memos/circular-memos';
import { ContactUs } from './pages/under-home/contact-us/contact-us';
import { LoginPage } from './pages/under-home/login-page/login-page';
import { HospitalList } from './pages/under-home/hospital-list/hospital-list';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: AboutUs },
  { path: 'login', component: LoginPage },
  { path: 'contact', component: ContactUs },
  { path: 'circulars', component: CircularMemos },
  { path: 'hospital-list', component: HospitalList }
];
