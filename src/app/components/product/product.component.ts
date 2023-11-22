import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconDirective } from '../../../directives/svg-icon/svg-icon.directive';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, SvgIconDirective],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input() product?: any;
}
