import { Component, OnInit } from '@angular/core';

import { UsersService } from './users.service';

@Component({
  selector: 'targil7-root',
  templateUrl: './targil7.component.html',
  styleUrls: ['./targil7.component.css']
})
export class Targil7Component implements OnInit {  
  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
  }
}
