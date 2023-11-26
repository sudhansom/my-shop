import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart, set } from './cart.actions';

const initialState: { name: string; price: number; quantity: number }[] = [];

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, action) => state),
  on(removeFromCart, (state, action) => state),
  on(set, (state) => [])
);
