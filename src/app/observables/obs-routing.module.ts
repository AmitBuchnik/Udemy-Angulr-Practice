import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ObsHomeComponent } from './home/home.component';
import { ObsUserComponent } from './user/user.component';


const routes: Routes = [
  {path: '', component: ObsHomeComponent},
  {path: 'user/:id', component: ObsUserComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ObsRoutingModule {
}
