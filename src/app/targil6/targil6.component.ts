import { Component, OnInit } from '@angular/core';

import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-targil6',
  templateUrl: './targil6.component.html',
  styleUrls: ['./targil6.component.css']
})
export class Targil6Component implements OnInit {
  accounts: { name: string, status: string }[] = [];
  
  constructor(private accountsService: AccountsService) {
  }

  ngOnInit(): void {
    this.accounts = this.accountsService.getAccounts();
  }
}
