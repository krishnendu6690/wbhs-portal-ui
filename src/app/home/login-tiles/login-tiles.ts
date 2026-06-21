import { Component } from '@angular/core';

@Component({
  selector: 'app-login-tiles',
  imports: [],
  templateUrl: './login-tiles.html',
  styleUrl: './login-tiles.scss',
})
export class LoginTiles {
  tiles = [
{
 title:'Medical Cell',
 icon:'medical-cell.png',
 route:'/medical-cell'
},
{
 title:'DDO & HoO',
 icon:'ddo.png',
 route:'/ddo'
},
{
 title:'Hospitals',
 icon:'hospital.png',
 route:'/hospital'
},
{
 title:'Treasury',
 icon:'treasury.png',
 route:'/treasury'
}
];
}
