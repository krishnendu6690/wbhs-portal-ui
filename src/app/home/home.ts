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
  employeeStats = [
  { title: 'Registered Employees', value: '152000' },
  { title: 'Beneficiaries', value: '450000' },
  { title: 'Cards Generated', value: '430000' },
  { title: 'Hospitals Availed', value: '350' }
];

pensionerStats = [
  { title: 'Registered Pensioners', value: '85000' },
  { title: 'Beneficiaries', value: '230000' },
  { title: 'Cards Generated', value: '210000' },
  { title: 'Hospitals Availed', value: '350' }
];

circulars = [
  'WBHS Circular No. 01/2025',
  'Package Rate Revision Notice',
  'New Enrollment Guideline',
  'Hospital Empanelment Update'
];

bottomStats = [
  {
    value: 204,
    text: 'Empanelled Private Hospitals'
  },
  {
    value: 30,
    text: 'Empanelled Diagnostic Centres'
  },
  {
    value: 1477,
    text: 'Ongoing Treatments'
  }
];

portalTiles = [
  {
    title: 'Medical Cell',
    image: 'images/medical_icon.png'
  },
  {
    title: 'DDO & HoO',
    image: 'images/DDO_icon.png'
  },
  {
    title: 'Hospitals',
    image: 'images/hospital_icon.png'
  },
  {
    title: 'Treasury',
    image: 'images/tresury_icon.png'
  },
  {
    title: 'Employee / Pensioner',
    image: 'images/emp_pen_icon.png'
  },
  {
    title: 'GIA College / University',
    image: 'images/gia_clg_uc.png'
  },
  {
    title: 'PRB Employee / Pensioner',
    image: 'images/Panchayat2.png'
  }
];

}
