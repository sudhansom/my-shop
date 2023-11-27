import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconDirective } from '../../../directives/svg-icon/svg-icon.directive';
import { NavigationDirective } from '../../../directives/navigtion/navigation.directive';
import { BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import { ICartItem } from '../../models/cartItems.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SvgIconDirective, NavigationDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  showCart$ = new BehaviorSubject<boolean>(false);
  totalItem = 0;

  toogleShowCart() {
    this.showCart$.next(!this.showCart$.value);
  }

  ngOnInit() {
    this.store.select('cart').subscribe((items) => {
      this.totalItem = items
        .map((item) => item.quantity)
        .reduce((acc, curr) => acc + curr, 0);
    });
  }

  constructor(private store: Store<{ cart: ICartItem[] }>) {}
}
