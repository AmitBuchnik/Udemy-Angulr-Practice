import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './routers/home/home.component';
import { ServersComponent } from './routers/servers/servers.component';
import { UsersComponent } from './routers/users/users.component';
import { ServerComponent } from './routers/servers/server/server.component';
import { UserComponent } from './routers/users/user/user.component';
import { EditServerComponent } from './routers/servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserResolver } from './routers/users/user/user-resolver.service';
import { AuthGuardGuard } from './auth-guard.guard';
import { CanDeactivateGuard } from './routers/servers/edit-server/can-deactivate.guard';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolverService } from './routers/servers/server/server-resolver.service';

const appRoutes: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    {
        path: 'servers',
        component: ServersComponent,
        // canActivate: [AuthGuardGuard],
        canActivateChild: [AuthGuardGuard],
        children: [
            {
                path: ':id',
                component: ServerComponent,
                resolve: { server: ServerResolverService }
            },
            {
                path: ':id/edit',
                component: EditServerComponent,
                canDeactivate: [CanDeactivateGuard]
            }
        ]
    },
    {
        path: 'users',
        component: UsersComponent,
        children: [
            {
                path: ':id/:name',
                component: UserComponent,
                // resolve: { user: UserResolver }
            }
        ]
    },
    // { path: 'not-found', component: PageNotFoundComponent },
    { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
    { path: '**', redirectTo: '/not-found' }
];

@NgModule({
    imports: [
        // RouterModule.forRoot(appRoutes, { useHash: true })
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}