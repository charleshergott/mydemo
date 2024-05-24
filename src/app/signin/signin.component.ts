import { Component, OnInit } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonMenu, IonRow, IonSplitPane } from '@ionic/angular/standalone';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  standalone: true,
  imports: [IonHeader,
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
    IonButton]
})
export class SigninComponent implements OnInit {

  constructor(private _signin: Auth) { }

  ngOnInit() { }

  async signIn() {
    const provider = new GoogleAuthProvider;
    const credential = await signInWithPopup(this._signin, provider)
    console.log(credential)
  }

}
