import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

import { ServersService } from '../servers.service';
import { IServer } from './IServer';

@Injectable({
  providedIn: 'root'
})
export class ServerResolverService implements Resolve<IServer> {
  constructor(private serversService: ServersService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IServer> | Promise<IServer> | IServer {
    return this.serversService.getServer(+route.params['id']);
  }
}
