import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { KitchenComponent } from './kitchen/kitchen.component';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

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
    ]),
  ],
};
