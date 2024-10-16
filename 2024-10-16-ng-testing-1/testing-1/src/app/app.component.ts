import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PinBoardComponent } from "./pin-board/pin-board.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PinBoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'testing-1';
}
