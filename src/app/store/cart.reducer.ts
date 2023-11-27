import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart, set } from './cart.actions';
import { ICartItem } from '../models/cartItems.model';

const initialState: ICartItem[] = [];

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, action) => {
    if (state.length > 0) {
      let inserted = false;
      let newState = state.map((item) => {
        if (action.product.title === item.title) {
          inserted = true;
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });
      if (!inserted) {
        newState.push(action.product);
      }
      return newState;
    }
    return [action.product];
  }),
  on(removeFromCart, (state, action) => {
    return state
      .map((item) => {
        if (action.product.title === item.title) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      })
      .filter((item) => item.quantity);
  }),
  on(set, (state) => [])
);
