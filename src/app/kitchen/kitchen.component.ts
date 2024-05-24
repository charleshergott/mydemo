import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection, query } from 'firebase/firestore';
import { IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonMenu, IonRow, IonSplitPane } from '@ionic/angular/standalone';


@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss'],
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
  ]
})
export class KitchenComponent implements OnInit {

  data$ = this.getData();


  constructor(
    private _firestore: Firestore
  ) { }

  ngOnInit() { }

  getData() {
    const fbCollection = collection(this._firestore, 'orderfood');
    const q = query(fbCollection);
    return collectionData(q, { idField: 'id' });
  }



}