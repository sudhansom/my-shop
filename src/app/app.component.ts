import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { Store } from '@ngrx/store';
import { ICartItem } from './models/cartItems.model';
import { init } from './store/cart.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'online-shopping';

  ngOnInit(): void {
    this.store.dispatch(init());
  }
  constructor(private store: Store<{ cart: ICartItem[] }>) {}
}
