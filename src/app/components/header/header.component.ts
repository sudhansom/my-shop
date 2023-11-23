import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconModule } from '../../../directives/svg-icon/svg-icon.module';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SvgIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
