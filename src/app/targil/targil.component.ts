import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-targil',
  templateUrl: './targil.component.html',
  styleUrls: ['./targil.component.css']
})
export class TargilComponent implements OnInit {
  showSecret: boolean = true;
  timeStamps: any = [];

  constructor() { }

  ngOnInit() {
  }

  onToggle(): void {
    this.showSecret = !this.showSecret;
    this.timeStamps.push(new Date().toLocaleTimeString());
  }
}
