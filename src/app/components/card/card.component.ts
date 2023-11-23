import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() categories?: any;
  @Output() onCategorySelected = new EventEmitter<string>();
  @Output() onSort = new EventEmitter<string>();
  category = '';
  sort = ['asc', 'dsc'];

  selectCategory(aaa: Event) {
    this.onCategorySelected.emit((aaa.target as HTMLSelectElement)?.value);
  }

  selectSort(aaa: Event) {
    this.onSort.emit((aaa.target as HTMLSelectElement)?.value);
  }
}
