import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import database from './data.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = database.title;
  categories = database.data;


  handleClick($event: any) {
    this.title = 'demo'
  };
}
