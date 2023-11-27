import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICartItem } from '../../models/cartItems.model';
import { SvgIconDirective } from '../../../directives/svg-icon/svg-icon.directive';

@Component({
  selector: 'app-each-cart-item',
  standalone: true,
  imports: [CommonModule, SvgIconDirective],
  templateUrl: './each-cart-item.component.html',
  styleUrl: './each-cart-item.component.scss',
})
export class EachCartItemComponent implements OnInit {
  @Input() cartItem?: ICartItem = {
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    name: "men's jacket",
    price: 100,
    quantity: 2,
  };
  price = 0;
  ngOnInit() {
    if (this.cartItem) {
      this.price = this.cartItem.price * this.cartItem.quantity;
    }
  }
}
