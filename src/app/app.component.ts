import { Component, OnInit, AfterViewInit, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  userName: string = '';
  ctx = { message: 'Amit' };
  @ViewChild('hello') private hello: TemplateRef<any>;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.hello);
  }

  getColor(): string {
    return this.userName.length > 6 ? 'red' : 'green';
  }
}
