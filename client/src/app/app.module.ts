import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './main-view/home/home.component';
import { LibraryComponent } from './main-view/library/library.component';
import { MainViewComponent } from './main-view/main-view.component';
import { SearchComponent } from './main-view/search/search.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ChromecastBlockComponent } from './player-bar/chromecast-block/chromecast-block.component';
import { MusicCoverComponent } from './player-bar/music-cover/music-cover.component';
import { PlayerBarComponent } from './player-bar/player-bar.component';
import { PlayerComponent } from './player-bar/player/player.component';
import { SecondToMinutePipe } from './shared/pipes/second-to-minute.pipe';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    MainViewComponent,
    NavBarComponent,
    SecondToMinutePipe,
    SearchComponent,
    HomeComponent,
    LibraryComponent,
    PlayerBarComponent,
    MusicCoverComponent,
    ChromecastBlockComponent
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
