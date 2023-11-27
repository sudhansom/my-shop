import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideHttpClient,
  withInterceptorsFromDi,
  withFetch,
} from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { cartReducer } from './store/cart.reducer';
import { provideEffects } from '@ngrx/effects';
import { CartEffects } from './store/cart.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideStore({ cart: cartReducer }),
    provideEffects(CartEffects),
  ],
};
