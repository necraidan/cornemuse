import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { MainViewComponent } from './main-view/main-view.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SecondToMinutePipe } from './shared/pipes/second-to-minute.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    MainViewComponent,
    NavBarComponent,
    SecondToMinutePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
