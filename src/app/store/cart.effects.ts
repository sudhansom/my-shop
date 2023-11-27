import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addToCart,
  deleteAll,
  deleteFromCart,
  init,
  removeFromCart,
  set,
} from './cart.actions';
import { Store } from '@ngrx/store';
import { ICartItem } from '../models/cartItems.model';
import { withLatestFrom, tap, switchMap, of } from 'rxjs';

@Injectable()
export class CartEffects {
  onLoad = createEffect(() =>
    this.actions$.pipe(
      ofType(init),
      switchMap(() => {
        let cartValue: any = localStorage.getItem('cart');
        if (cartValue) {
          cartValue = JSON.parse(cartValue) as ICartItem[];
          console.log('Value', cartValue);
          return of(set({ cart: cartValue }));
        }
        return of(set({ cart: [] }));
      })
    )
  );

  onSave = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addToCart, removeFromCart, deleteFromCart, deleteAll),
        withLatestFrom(this.store.select('cart')),
        tap(([action, cart]) => {
          console.log(cart);
          localStorage.setItem('cart', JSON.stringify(cart));
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store<{ cart: ICartItem[] }>
  ) {}
}
