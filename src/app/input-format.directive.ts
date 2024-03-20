import { Directive, ElementRef, Host, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormat]',
  standalone: true,
})
export class InputFormatDirective {
  constructor(private el: ElementRef) {}

  @HostListener('focus') onFocus() {
    console.log('on focus');
  }

  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toLowerCase();
  }
}
