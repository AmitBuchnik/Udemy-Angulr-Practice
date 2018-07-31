import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private inactiveToActiveCounter = 0;
  private activeToInactiveCounter = 0;

  constructor() { }

  incrementInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log('inactive->active ' + this.inactiveToActiveCounter);
  }

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log('active->inactive ' + this.activeToInactiveCounter);
  }
}
