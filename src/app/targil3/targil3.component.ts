import { Component, OnInit } from '@angular/core';

import { Element } from './element.model';
import { ElementsService } from './elements.service';

@Component({
  selector: 'app-targil3',
  templateUrl: './targil3.component.html',
  styleUrls: ['./targil3.component.css']
})
export class Targil3Component implements OnInit {
  serverElements: Element[] = [];  

  constructor(private elementsService: ElementsService) {
  }

  ngOnInit(): void {
    // this.serverElements = this.elementsService.getServers();
  }

  onServerAdded(serverData: Element) {
    this.serverElements.push({
      type: serverData.type,
      name: serverData.name,
      content: serverData.content
    });
  }

  onBlueprintAdded(blueprintData: Element) {
    this.serverElements.push({
      type: blueprintData.type,
      name: blueprintData.name,
      content: blueprintData.content
    });
  }
}
