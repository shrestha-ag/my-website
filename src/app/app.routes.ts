import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BoardComponent } from './board/board.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'board', component: BoardComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
];