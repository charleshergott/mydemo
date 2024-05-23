import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection, query } from 'firebase/firestore';


@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
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