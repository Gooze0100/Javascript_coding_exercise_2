import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[dropdown]',
})
export class MoreBtnDirective {
  private isOpen: boolean = false;

  constructor(private elRef: ElementRef) {}

  @HostListener('window:click', ['$event']) toggle(e) {
    const checkbox = this.elRef.nativeElement.querySelector('#dropdown');
    if (!this.elRef.nativeElement.contains(e.target)) {
      checkbox.checked = false;
    }
  }
}
