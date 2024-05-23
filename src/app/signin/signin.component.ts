import { Component, OnInit } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  standalone: true,
  imports: [IonicModule]
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
