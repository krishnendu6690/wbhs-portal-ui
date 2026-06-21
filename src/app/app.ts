import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./shared/header/header";
import { Navbar } from "./layout/navbar/navbar";
import { Hero } from "./home/hero/hero";
import { Home } from "./home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Navbar, Hero, Home],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('wbhs-portal-ui');
}
