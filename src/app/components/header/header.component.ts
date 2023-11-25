import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconDirective } from '../../../directives/svg-icon/svg-icon.directive';
import { NavigationDirective } from '../../../directives/navigtion/navigation.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SvgIconDirective, NavigationDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
