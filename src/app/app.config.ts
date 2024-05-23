import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { KitchenComponent } from './kitchen/kitchen.component';
import { provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { SigninComponent } from './signin/signin.component';
import { provideServiceWorker } from '@angular/service-worker';

export const config: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter([
        {
            path: 'home',
            component: HomeComponent,
        },
        {
            path: 'kitchen',
            children: [
                {
                    path: '',
                    component: KitchenComponent,
                },
                // {
                //   path: 'settings',
                //   component: SettingsComponent,
                // },
            ],
        },
        // {
        //   path: '404',
        //   component: NotFoundComponent,
        // },
        {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full',
        },
        {
            path: '**',
            redirectTo: '404',
            pathMatch: 'full',
        },
        {
            path: 'signin',
            component: SigninComponent
        }
    ]),
    provideIonicAngular({}),
    provideAnimationsAsync(),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(provideFirebaseApp(() => initializeApp({
        "projectId": "kitchen-cdda3",
        "appId": "1:848522166650:web:af2252f30efa95707a56c3",
        "storageBucket": "kitchen-cdda3.appspot.com",
        "apiKey": "AIzaSyA6G34Fl-5A7Wz1EDLd_eUIMPQjLBDEqOM",
        "authDomain": "kitchen-cdda3.firebaseapp.com",
        "messagingSenderId": "848522166650",
        "measurementId": "G-F13MBQT900"
    }))),
    importProvidersFrom(provideAuth(() => getAuth())),
    provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    })
],
};
