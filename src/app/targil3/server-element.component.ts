import {
  Component,
  OnInit,
  Input,
  // ViewEncapsulation,
  AfterContentInit,
  AfterContentChecked,
  OnDestroy,
  AfterViewInit,
  AfterViewChecked,
  OnChanges,
  SimpleChanges,
  DoCheck,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

import { Element } from './element.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnChanges,
  OnInit,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  DoCheck,
  OnDestroy {
  @Input('srvElement') element: Element;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef; 

  constructor() { 
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    console.log(this.header.nativeElement.textContent);
  }    

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
    console.log(`Text content of paragraph: ${this.paragraph.nativeElement.textContent}`);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  } 

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  } 
}
