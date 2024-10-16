import { Component } from '@angular/core';
import { PinComponent } from '../pin/pin.component';
import { CreatePinComponent } from "../create-pin/create-pin.component";

@Component({
  selector: 'app-pin-board',
  standalone: true,
  imports: [PinComponent, CreatePinComponent],
  templateUrl: './pin-board.component.html',
  styleUrl: './pin-board.component.scss'
})
export class PinBoardComponent {
  pinList: {src: string, zoom?: number, posX?: number, posY?: number}[] 
    = [{src: "img/1.png"}];
}
