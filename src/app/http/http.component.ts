import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { ServerService } from './server.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  appName = this.serverService.getAppName();

  servers = [
      {
        name: 'Testserver',
        capacity: 10,
        id: this.generateId()
      },
      {
        name: 'Liveserver',
        capacity: 100,
        id: this.generateId()
      }
  ]; 

  constructor(private serverService: ServerService) { 
  }

  ngOnInit() {
  }

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  onSaveServers() {
    this.serverService.storeServers(this.servers)
      .subscribe((response) => console.log(response),
      (error) => console.log("error: " + error));
  }

  onGetServers() {
    this.serverService.getServers()
      .subscribe((servers: any[]) => this.servers = servers,
        (error) => console.log(error));
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
