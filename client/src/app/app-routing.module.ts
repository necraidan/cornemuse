import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main-view/home/home.component';
import { LibraryComponent } from './main-view/library/library.component';
import { SearchComponent } from './main-view/search/search.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'library', component: LibraryComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
