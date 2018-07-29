import { Injectable } from '@angular/core';

import { Element } from './element.model';

@Injectable({
  providedIn: 'root'
})
export class ElementsService {
  serverElements: Element[] = [];

  constructor() { }

  getServers(): Element[] {
    return this.serverElements;
  }

  addServer(element: Element): void {
    this.serverElements.push(element);
  }

  addBlueprint(element: Element): void {
    this.serverElements.push(element);
  }
}
