import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { UsersService } from './users.service';

@Component({
  selector: 'obs-root',
  templateUrl: './obs.component.html',
  styleUrls: ['./obs.component.css']
})
export class ObsComponent implements OnInit, OnDestroy {  
  user1Activated: boolean = false;
  user2Activated: boolean = false;
  userActivatedSubscription: Subscription;

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.usersService.userActivated
      .subscribe((id: number) => {
        if (id === 1) {
          this.user1Activated = true;
        } else if (id === 2) {
          this.user2Activated = true; 
        }
      });
  }

  ngOnDestroy(): void {
    this.userActivatedSubscription.unsubscribe();
  }
}

