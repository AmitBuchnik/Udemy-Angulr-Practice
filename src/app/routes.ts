import { Routes } from '@angular/router';

import { HomeComponent } from './routers/home/home.component';
import { ServersComponent } from './routers/servers/servers.component';
import { UsersComponent } from './routers/users/users.component';
import { ServerComponent } from './routers/servers/server/server.component';
import { UserComponent } from './routers/users/user/user.component';
import { EditServerComponent } from './routers/servers/edit-server/edit-server.component';

export const appRoutes: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    {
        path: 'servers',
        component: ServersComponent,
        children: [
            { path: ':id', component: ServerComponent },
            { path: ':id/edit', component: EditServerComponent }
        ]
    },
    {
        path: 'users',
        component: UsersComponent,
        children: [
            { path: ':id/:name', component: UserComponent }
        ]
    },
];