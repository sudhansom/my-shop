import { createAction, props } from '@ngrx/store';
import { ICartItem } from '../models/cartItems.model';

export const addToCart = createAction(
  '[Cart] add',
  props<{ product: ICartItem }>()
);

export const removeFromCart = createAction(
  '[Cart] remove',
  props<{ product: ICartItem }>()
);
export const deleteFromCart = createAction(
  '[Cart] delete',
  props<{ product: ICartItem }>()
);

export const init = createAction('[Cart] Init');

export const set = createAction('[Cart] Set', props<{ cart: ICartItem[] }>());
