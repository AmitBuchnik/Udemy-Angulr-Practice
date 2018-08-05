import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

import { IUser } from './IUser';

@Injectable({
    providedIn: 'root'
})
export class UserResolver implements Resolve<IUser> {
    constructor() {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<IUser> | Promise<IUser> | IUser {
        return {
            id: route.params['id'],
            name: route.params['name']
        };
    }
}