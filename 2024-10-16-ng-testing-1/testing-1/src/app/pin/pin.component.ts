import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pin',
  standalone: true,
  imports: [],
  templateUrl: './pin.component.html',
  styleUrl: './pin.component.scss'
})
export class PinComponent implements AfterViewInit {
  @Input() src: string = "img/3.png";
  @Input() zoom?: number; // Siffra mellan 0 och 3, 3 => bildstorlek på 300%
  @Input() posX?: number; // Siffra mellan 0 och 1
  @Input() posY?: number; // Siffra mellan 0 och 1
  @ViewChild('img') imgElem!: ElementRef;
  ngAfterViewInit() {
    if(this.zoom != undefined && this.zoom > 0 && this.zoom <= 3) 
      this.imgElem.nativeElement.setProperty("--scale", `${this.zoom*100}%`);
    let pos = "";
    if(this.posX != undefined && this.posX >= 0 && this.posX <= 1) {
      pos += `${this.posX*100}%`;
      if(this.posY != undefined && this.posY >= 0 && this.posY <= 1) 
        pos += ` ${this.posY*100}%`;
    } else if(this.posY != undefined && this.posY >= 0 && this.posY <= 1) 
      pos += `50% ${this.posY*100}%`;
    if(pos.length > 0) this.imgElem.nativeElement.style.objectPosition = pos;
  }
}

