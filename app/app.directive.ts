import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({ selector: '[directive]' })
export class AppDirective {
    constructor(private el: ElementRef, private render: Renderer) { }

    @HostListener('mouseover')
    onMouseOver() {
        this.changeBackgroundColor('red');
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.changeBackgroundColor(null)
    }

    changeBackgroundColor(color: string) {
        this.render.setElementStyle(this.el.nativeElement, 'background-color', color);
    }
}
