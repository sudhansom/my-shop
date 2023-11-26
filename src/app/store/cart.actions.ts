import { createAction, props } from '@ngrx/store';

export const addToCart = createAction(
  '[Cart] add',
  props<{ name: string; price: number; quantity: number }>()
);

export const removeFromCart = createAction(
  '[Cart] add',
  props<{ name: string; price: number; quantity: number }>()
);

export const init = createAction('[Store] Init');

export const set = createAction('[] Set');
