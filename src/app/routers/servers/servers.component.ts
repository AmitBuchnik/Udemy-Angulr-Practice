import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: { id: number, name: string, status: string }[] = [];

  constructor(private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // this.router.navigate(['servers'], { relativeTo: this.route }); // http://localhost:4200/servers/servers
    // this.router.navigate(['servers']); // relativeTo by default http://localhost:4200 so http://localhost:4200/servers
    this.router.navigate(['/servers']); // absolute path so http://localhost:4200/servers
  }
}
