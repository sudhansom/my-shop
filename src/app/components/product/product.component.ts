import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconDirective } from '../../../directives/svg-icon/svg-icon.directive';
import { Store } from '@ngrx/store';
import { ICartItem } from '../../models/cartItems.model';
import { addToCart } from '../../store/cart.actions';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, SvgIconDirective],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input() product?: IProduct;
  constructor(private store: Store<{ cart: ICartItem[] }>) {}
  addToCart() {
    if (this.product) {
      this.store.dispatch(
        addToCart({
          product: {
            image: this.product.image,
            title: this.product.title,
            price: this.product.price,
            quantity: 1,
          },
        })
      );
    }
  }
}
