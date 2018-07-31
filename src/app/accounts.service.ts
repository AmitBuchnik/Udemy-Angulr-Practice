import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  private accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor() { }

  getAccounts(): { name: string, status: string } [] {
    return this.accounts;
  }

  addAccount(name: string, status: string) {
    this.accounts.push({
      name: name,
      status: status
    });
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }
}