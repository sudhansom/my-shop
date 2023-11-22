import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { DataService } from '../../services/data.service';
import { ProductComponent } from '../../components/product/product.component';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductComponent, CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products$ = this._data.getProducts();
  category$ = this._data.category$;
  selectedCategory$ = new BehaviorSubject<string>('');
  constructor(private _data: DataService) {}

  ngOnInit() {
    this.products$.subscribe(
      (
        products: {
          category: string;
          id: number;
          image: string;
          price: number;
        }[]
      ) => {
        let category = products
          .map((item) => item.category)
          .filter((a, i, arr) => {
            return arr.indexOf(a) === i;
          });
        this._data.category$.next(category);
      }
    );
  }
  selectCategory(category: string) {
    this.products$ = this.products$.pipe(
      map((product) =>
        product.filter(
          (prod: {
            category: string;
            id: number;
            image: string;
            price: number;
          }) => prod.category === category
        )
      )
    );
  }
}
