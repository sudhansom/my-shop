import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { DataService } from '../../services/data.service';
import { ProductComponent } from '../../components/product/product.component';
import { CardComponent } from '../../components/card/card.component';
import { SpinnerComponent } from '../../components/spinner/spinner.component';

import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductComponent, CardComponent, SpinnerComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products$ = this._data.getProducts();
  category$ = this._data.category$;
  isLoading$ = this._data.isLoading$;
  isError$ = new BehaviorSubject<string>('');
  selectedCategory$ = new BehaviorSubject<string>('');
  constructor(private _data: DataService) {}

  ngOnInit() {
    this.fetchData();
  }
  selectCategory(category: string) {
    this.products$ = this._data.getProducts();
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
  fetchData() {
    this._data.isLoading$.next(true);
    this.products$.subscribe(
      (
        products: {
          category: string;
          id: number;
          image: string;
          price: number;
        }[]
      ) => {
        this._data.isLoading$.next(false);
        let category = products
          .map((item) => item.category)
          .filter((a, i, arr) => {
            return arr.indexOf(a) === i;
          });
        this._data.category$.next(category);
      },
      (error) => {
        this._data.isLoading$.next(false);
        this.isError$.next(`Error: ${error.message}`);
      }
    );
  }

  selectSort(sort: string) {
    this.products$ = this._data.getProducts();
    this.products$ = this.products$.pipe(
      map((products: IProduct[]) =>
        products.sort((a, b) => {
          if (sort === 'asc') {
            return a.price > b.price ? 1 : -1;
          } else return a.price < b.price ? 1 : -1;
        })
      )
    );
  }
}
