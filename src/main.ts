import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config';



bootstrapApplication(AppComponent, config)
  .catch((err) => console.error(err));
