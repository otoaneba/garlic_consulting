import { Component, HostListener, AfterViewInit, ElementRef, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit, OnDestroy {

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.querySelector('#my-element').addEventListener('mousemove', this.onMouseMove.bind(this));
    this.elementRef.nativeElement.querySelector('#my-element').addEventListener('touchmove', this.onMouseMove.bind(this));
    console.log('onChanges')
  }

  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e: MouseEvent) {
   // console.log(e);
      var x = e.clientX || e.x
      var y = e.clientY || e.y
      document.documentElement.style.setProperty('--cursorX', x + 'px')
      document.documentElement.style.setProperty('--cursorY', y + 'px')
  }
}
