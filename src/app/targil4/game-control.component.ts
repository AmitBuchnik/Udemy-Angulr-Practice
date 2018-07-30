import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  lastNumber: number = 0;
  interval: NodeJS.Timer;
  isStart: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onStartGame(): void {
    this.isStart = true;

    this.interval = setInterval(() => {
      this.intervalFired.emit(++this.lastNumber);
    }, 1000);
  }

  onPauseGame(): void {
    this.isStart = false;
    
    clearInterval(this.interval);
  }
}
