import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[dropdown]',
})
export class MoreBtnDirective {
  constructor(private elRef: ElementRef) {}

  @HostListener('window:click', ['$event']) toggle(e) {
    const checkbox = this.elRef.nativeElement.querySelector('#dropdown');
    const moreBtn = this.elRef.nativeElement.querySelector('#moreBtn');
    if (!this.elRef.nativeElement.contains(e.target)) {
      checkbox.checked = false;
      moreBtn.classList.remove('backgroundChange');
    }
  }
  @HostListener('input') backgroundChange() {
    const moreBtn = this.elRef.nativeElement.querySelector('#moreBtn');
    const input = this.elRef.nativeElement.querySelector('#dropdown');

    if (moreBtn !== undefined) {
      if (input.checked) {
        moreBtn.classList.add('backgroundChange');
      } else {
        moreBtn.classList.remove('backgroundChange');
      }
    }
  }
}
