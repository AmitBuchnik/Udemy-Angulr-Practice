import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-targil4',
  templateUrl: './targil4.component.html',
  styleUrls: ['./targil4.component.css']
})
export class Targil4Component implements OnInit {
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  constructor() { }

  ngOnInit() {
  }

  onIntervalFired(firedNumber: number): void {
    this.isEven(firedNumber) ? this.evenNumbers.push(firedNumber) : this.oddNumbers.push(firedNumber);
  }

  isEven(n): boolean {
    return n % 2 === 0;
  }
}
