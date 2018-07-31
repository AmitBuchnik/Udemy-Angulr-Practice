import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
