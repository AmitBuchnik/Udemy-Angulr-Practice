import { Component, OnInit, EventEmitter, Output, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import { ElementsService } from './elements.service';
import { Element } from './element.model';

@Component({
  selector: 'app-cokpit',
  templateUrl: './cokpit.component.html',
  styleUrls: ['./cokpit.component.css']
})
export class CokpitComponent implements OnInit, AfterViewInit {  
  @Output() serverCreated: EventEmitter<Element>
    = new EventEmitter<Element>();
  @Output() blueprintCreated: EventEmitter<Element>
    = new EventEmitter<Element>();

  @ViewChild('serverContentInput') serverContentInput: ElementRef<HTMLInputElement>;
  
  constructor(private elementsService: ElementsService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  onAddServer(serverNameInput: HTMLInputElement): void {
    // this.elementsService.addServer(new Element('server', serverContent, serverContent));
    this.serverCreated.emit(new Element('server', serverNameInput.value, this.serverContentInput.nativeElement.value));
  }

  onAddBlueprint(serverName: string): void {
    // this.elementsService.addServer(new Element('blueprint', serverContent, serverContent));
    this.blueprintCreated.emit(new Element('blueprint', serverName, this.serverContentInput.nativeElement.value));
  }
}
