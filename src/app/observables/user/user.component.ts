import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from 'src/app/observables/users.service';

@Component({
  selector: 'obs-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class ObsUserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute,
    private usersService: UsersService) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
      },
        () => { },
        () => { }
      );
  }

  onActivate() {
    this.usersService.userActivated.next(this.id);
  }
}
