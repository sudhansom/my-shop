import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ICartItem } from '../../models/cartItems.model';
import { EachCartItemComponent } from '../../components/each-cart-item/each-cart-item.component';
import { NavigationDirective } from '../../../directives/navigtion/navigation.directive';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, EachCartItemComponent, NavigationDirective],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  cartItems$: Observable<ICartItem[]>;
  totalAmount = 0;

  ngOnInit(): void {}

  constructor(private store: Store<{ cart: ICartItem[] }>) {
    this.cartItems$ = store.select('cart');
    //remember to unsubscribe....
    this.cartItems$.subscribe((items) => {
      this.totalAmount = items
        .map((item) => item.price * item.quantity)
        .reduce((acc, curr) => acc + curr, 0);
    });
  }
}
