import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IonicModule } from '@ionic/angular';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    IonicModule,
    MatDialogModule
  ],
  template: '<router-outlet></router-outlet>',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
}