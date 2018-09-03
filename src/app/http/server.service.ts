import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/internal/Observable';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  url: string = "https://udemy-ng-http-edf42.firebaseio.com/data.json";

  constructor(private http: Http) {
  }

  storeServers(servers: any[]): Observable<Response> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    // return this.http.post(this.url, servers, { headers: headers }); // Firebase post is appending
    return this.http.put(this.url, servers, { headers: headers }); // Firebase put is overriding
  }

  getServers(): Observable<any[]> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.get(this.url, { headers: headers })
      .pipe(map((response: Response) => {
        const data = response.json();
        for (const server of data) {
          server.name = 'FETECHED_' + server.name;
        }
        return data;
      }))
      .pipe(catchError((error: Response) => {        
        return throwError('error from server'); 
      }));
  }

  getAppName() : Observable<string> {
    return this.http.get('https://udemy-ng-http-edf42.firebaseio.com/appName.json')
      .pipe(map((response: Response) => {
        return response.json();
      }));
  }
}
