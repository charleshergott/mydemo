import { Component } from '@angular/core';
import { IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonMenu, IonRow, IonSplitPane } from '@ionic/angular/standalone';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [
    IonHeader,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonButton],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent {

}
