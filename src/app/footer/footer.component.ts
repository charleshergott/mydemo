import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonMenu, IonRow, IonSplitPane } from '@ionic/angular/standalone';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,
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
    IonButton
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',

})

export class FooterComponent {

}




