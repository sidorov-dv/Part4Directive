import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {

    @Input('appBackground') textDecor!: string;
    @Input() defaultTextDecor!: string;

    @HostBinding('style.fontStyle') fontStyle!: string;
    @HostBinding('style.textDecoration') textDecoration!: string;
    
    constructor(private element: ElementRef, private renderer: Renderer2) {}

    ngOnInit(): void {
        console.log(this.element);
        this.textDecoration = 'none';
       // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
       // this.renderer.addClass(this.element.nativeElement, 'white-text');
       // this.element.nativeElement.style.backgroundColor = 'red';
    }

    @HostListener('mouseenter') mouseEnter() {
        this.renderer.setStyle(this.element.nativeElement, 'background-color', 'red');
        this.renderer.addClass(this.element.nativeElement, 'white-text');
        this.fontStyle = 'italic';
        this.textDecoration = this.textDecor;
    }

    @HostListener('mouseleave') mouseLeave() {
        this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
        this.renderer.removeClass(this.element.nativeElement, 'white-text');
        this.fontStyle = 'normal';
        this.textDecoration = this.defaultTextDecor;
    }
}