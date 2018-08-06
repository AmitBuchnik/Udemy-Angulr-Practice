import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

import { ServersService } from '../servers.service';
import { IServer } from './IServer';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: IServer;

  constructor(private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.route.params.subscribe((params: Params) => {
    //   this.server = this.serversService.getServer(+params['id']);
    // });

    this.route.data.subscribe((data: Data) => {
      this.server = data.server;
    });
  }

  onEdit() {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
      preserveFragment: true
    });
  }
}
