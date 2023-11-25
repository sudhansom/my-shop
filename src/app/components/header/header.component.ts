import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconDirective } from '../../../directives/svg-icon/svg-icon.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SvgIconDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
