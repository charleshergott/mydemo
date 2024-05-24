import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';




bootstrapApplication(AppComponent, config)
  .catch((err) => console.error(err));
