import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ICartItem } from '../../models/cartItems.model';
import { EachCartItemComponent } from '../../components/each-cart-item/each-cart-item.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, EachCartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartItems: ICartItem[] = [
    {
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      name: "men's jacket",
      price: 100,
      quantity: 2,
    },
  ];
}
