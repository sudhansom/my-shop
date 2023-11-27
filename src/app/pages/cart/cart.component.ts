import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ICartItem } from '../../models/cartItems.model';
import { EachCartItemComponent } from '../../components/each-cart-item/each-cart-item.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, EachCartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  cartItems$: Observable<ICartItem[]>;

  ngOnInit(): void {}

  constructor(private store: Store<{ cart: ICartItem[] }>) {
    this.cartItems$ = store.select('cart');
  }
}
