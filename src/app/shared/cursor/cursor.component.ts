import { CommonModule } from '@angular/common';
import { Component, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-cursor',
  imports: [
    CommonModule,
  ],
  templateUrl: './cursor.component.html',
  styleUrl: './cursor.component.scss'
})
export class CursorComponent implements AfterViewInit{
  speed = 0.15;
  mouseX = 0;
  mouseY = 0;
  circleX = 0;
  circleY = 0;
  isTouchDevice = false;

  @ViewChild('cursor', { static: true }) refCursor!: ElementRef<HTMLDivElement>;
  @ViewChild('circle', { static: true }) refCircle!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    this.isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (!this.isTouchDevice) {
    this.animateCircle();
  } else {
    this.hideCursorElements();
  }
  }
 @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: any) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;

    this.refCursor.nativeElement.style.left = this.mouseX + 'px';
    this.refCursor.nativeElement.style.top = this.mouseY + 'px';
    
  }
  animateCircle() {
    this.circleX += (this.mouseX - this.circleX) * this.speed;
    this.circleY += (this.mouseY - this.circleY) * this.speed;

    this.refCircle.nativeElement.style.left = this.circleX + 'px';
    this.refCircle.nativeElement.style.top = this.circleY + 'px';

    requestAnimationFrame(() => this.animateCircle());
  }
  
  @HostListener('document:mousedown')
  onMouseDown() {
    if(this.refCircle.nativeElement){
      this.refCircle.nativeElement.style.backgroundColor = " #bae011";
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    if(this.refCircle.nativeElement){
      this.refCircle.nativeElement.style.backgroundColor = "transparent";
    }
  }

  hideCursorElements() {
  this.refCursor.nativeElement.style.display = 'none';
  this.refCircle.nativeElement.style.display = 'none';
}
}
