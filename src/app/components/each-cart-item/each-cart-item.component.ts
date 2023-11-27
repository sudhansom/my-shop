import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICartItem } from '../../models/cartItems.model';
import { SvgIconDirective } from '../../../directives/svg-icon/svg-icon.directive';
import { Store } from '@ngrx/store';
import {
  addToCart,
  deleteFromCart,
  removeFromCart,
} from '../../store/cart.actions';

@Component({
  selector: 'app-each-cart-item',
  standalone: true,
  imports: [CommonModule, SvgIconDirective],
  templateUrl: './each-cart-item.component.html',
  styleUrl: './each-cart-item.component.scss',
})
export class EachCartItemComponent implements OnInit {
  Math = Math;
  @Input() cartItem?: ICartItem;
  price = 0;
  ngOnInit() {
    if (this.cartItem) {
      this.price = this.cartItem.price * this.cartItem.quantity;
    }
  }
  onAddToCart() {
    if (this.cartItem) {
      this.store.dispatch(addToCart({ product: this.cartItem }));
    }
  }
  removeFromCart() {
    if (this.cartItem) {
      this.store.dispatch(removeFromCart({ product: this.cartItem }));
    }
  }
  deleteFromCart() {
    if (this.cartItem) {
      this.store.dispatch(deleteFromCart({ product: this.cartItem }));
    }
  }
  constructor(private store: Store<{ cart: ICartItem[] }>) {}
}
