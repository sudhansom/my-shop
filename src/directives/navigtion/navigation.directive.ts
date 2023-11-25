import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { Router } from '@angular/router';

export const isFullPath = (url: string): boolean => {
  return (
    url.startsWith &&
    (url.startsWith('https') ||
      url.startsWith('http') ||
      url.startsWith('tel:') ||
      url.startsWith('mailto:'))
  );
};

@Directive({
  selector: '[smNavigate]',
  standalone: true,
})
export class NavigationDirective {
  private _url = '';
  @Input() set smNavigate(url: string) {
    if (url === this._url) {
      return;
    }
    this._url = url;
    if (this.url) {
      this.renderer.setAttribute(this.el.nativeElement, 'href', this.url);
    } else {
      this.renderer.removeAttribute(this.el.nativeElement, 'href');
    }
  }

  get url() {
    return this._url;
  }

  private _target = '';
  @Input() set smNavigateTarget(target: string) {
    if (target === this._target) {
      return;
    }
    this._target = target === 'blank' || target === '_blank' ? '_blank' : '';
    if (this.target) {
      this.renderer.setAttribute(this.el.nativeElement, 'target', this.target);
    } else {
      this.renderer.removeAttribute(this.el.nativeElement, 'target');
    }
  }

  get target() {
    return this._target;
  }

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private router: Router
  ) {}

  @HostListener('click', ['$event'])
  public onClick(evt: Event): void {
    if (!this.url) {
      evt.preventDefault();
      return;
    }
    if (isFullPath(this.url)) {
      return;
    }

    evt.preventDefault();
    if (this.target === '_blank') {
      window.open(this.url, '_blank');
    } else {
      this.router.navigateByUrl(this.url);
    }
  }
}
