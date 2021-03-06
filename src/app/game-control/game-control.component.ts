import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() firedInterval = new EventEmitter<number>();
  interval;
  lastNumber = 0;
  constructor() {}

  ngOnInit(): void {
  }

  onStart() {
    this.interval = setInterval(() => {
      this.firedInterval.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onPause(){
    clearInterval(this.interval);
  }

}
