import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {provideRouter, Routes} from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import {HomeComponent} from './home/home.component';



export const appConfig: ApplicationConfig = {
  providers:
    [provideZoneChangeDetection({ eventCoalescing: true }),provideRouter(routes),provideHttpClient() ]
};
