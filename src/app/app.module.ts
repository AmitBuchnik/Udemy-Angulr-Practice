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

@NgModule({
  declarations: [
    AppComponent,
    TabContainerComponent,
    TargilComponent,
    Targil2Component,
    Targil3Component,
    CokpitComponent,
    ServerElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
