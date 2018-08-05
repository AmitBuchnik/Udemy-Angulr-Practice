import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from 'node_modules/@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { IUser } from './IUser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: IUser;
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.user = {
    //   id: this.route.snapshot.params['id'],
    //   name: this.route.snapshot.params['name'],
    // };

    // for changing the url parameters inside the component
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.user = {
        id: +params['id'],
        name: params['name']
      };
    });

    // this.route.data.subscribe((data) => {
    //   this.user = data['user'];
    // });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
