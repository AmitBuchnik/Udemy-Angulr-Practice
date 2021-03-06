import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TabContainerComponent } from './tab-container.component';
import { TargilComponent } from './targil/targil.component';
import { Targil2Component } from './targil2/targil2.component';
import { Targil3Component } from './targil3/targil3.component';
import { CokpitComponent } from './targil3/cokpit.component';
import { ServerElementComponent } from './targil3/server-element.component';
import { Targil4Component } from './targil4/targil4.component';
import { Targil6Component } from './targil6/targil6.component';
import { GameControlComponent } from './targil4/game-control.component';
import { OddComponent } from './targil4/odd.component';
import { EvenComponent } from './targil4/even.component';
import { Targil5Component } from './targil5/targil5.component';
import { BasicHighlightDirective } from './basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { NewAccountComponent } from './targil6/new-account/new-account.component';
import { AccountComponent } from './targil6/account/account.component';
import { Targil7Component } from './services/targil7.component';
import { ActiveUsersComponent } from './services/active-users/active-users.component';
import { InactiveUsersComponent } from './services/inactive-users/inactive-users.component';
import { Targil8Component } from './routers/targil8.component';
import { HomeComponent } from './routers/home/home.component';
import { UserComponent } from './routers/users/user/user.component';
import { UsersComponent } from './routers/users/users.component';
import { EditServerComponent } from './routers/servers/edit-server/edit-server.component';
import { ServerComponent } from './routers/servers/server/server.component';
import { ServersService } from './routers/servers/servers.service';
import { ServersComponent } from './routers/servers/servers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ObsComponent } from './observables/obs.component';
import { ObsHomeComponent } from './observables/home/home.component';
import { ObsUserComponent } from './observables/user/user.component';
import { ObsRoutingModule } from './observables/obs-routing.module';
import { FormsComponent } from './forms/forms.component';
import { TemplateDerivenFormsComponent } from './template-deriven-forms/template-deriven-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FormsReactiveAssignmentComponent } from './forms-reactive-assignment/forms-reactive-assignment.component';
import { Pipes1Component } from './pipes/pipes1/pipes1.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { HttpComponent } from './http/http.component';

@NgModule({
  declarations: [
    AppComponent,
    TabContainerComponent,
    TargilComponent,
    Targil2Component,
    Targil3Component,
    CokpitComponent,
    ServerElementComponent,
    Targil4Component,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    Targil5Component,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    Targil6Component,
    AccountComponent,
    NewAccountComponent,
    Targil7Component,
    ActiveUsersComponent,
    InactiveUsersComponent,
    Targil8Component,
    HomeComponent,
    UserComponent,
    UsersComponent,
    EditServerComponent,
    ServersComponent,
    ServerComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    ObsComponent,
    ObsHomeComponent,
    ObsUserComponent,
    FormsComponent,
    TemplateDerivenFormsComponent,
    ReactiveFormsComponent,
    FormsReactiveAssignmentComponent,
    Pipes1Component,
    ShortenPipe,
    FilterPipe,
    ReversePipe,
    SortPipe,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    // AppRoutingModule,
    ObsRoutingModule
  ],
  providers: [
    ServersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
