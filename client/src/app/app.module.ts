import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { ChromecastBlockComponent } from './bottom-bar/chromecast-block/chromecast-block.component';
import { MusicCoverComponent } from './bottom-bar/music-cover/music-cover.component';
import { PlayerComponent } from './bottom-bar/player/player.component';
import { HomeComponent } from './main-view/home/home.component';
import { LibraryComponent } from './main-view/library/library.component';
import { MainViewComponent } from './main-view/main-view.component';
import { SearchComponent } from './main-view/search/search.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SecondToMinutePipe } from './shared/pipes/second-to-minute.pipe';

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
    BottomBarComponent,
    MusicCoverComponent,
    ChromecastBlockComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
