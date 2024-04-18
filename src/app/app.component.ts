import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import database from './data.json';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = database.title;
  categories = database.data;
  recipes: any[] = [];


  handleClick($event: any) {
    this.title = 'demo'
  };
  handleHeaderClick($event: any) {
    console.log($event);
  }
}
