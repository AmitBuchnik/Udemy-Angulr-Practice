import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-targil5',
  templateUrl: './targil5.component.html',
  styleUrls: ['./targil5.component.css']
})
export class Targil5Component implements OnInit {
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;
  value = 10;

  constructor() { }

  ngOnInit() {
  }
}
