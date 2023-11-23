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
  category = '';

  selectCategory(cat: string) {
    console.log(cat);
  }
  abc(aaa: Event) {
    console.log('aaa', (aaa.target as HTMLSelectElement)?.value);
    this.onCategorySelected.emit((aaa.target as HTMLSelectElement)?.value);
  }
}
