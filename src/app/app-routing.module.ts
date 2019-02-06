import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
//  { path: '', redirectTo: 'home', pathMatch: 'full' },
//  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
//  { path: 'first', loadChildren: './pages/first/first.module#FirstPageModule' },
  //{ path: 'second', loadChildren: './pages/second/second.module#SecondPageModule' },
  { path: '', loadChildren: './pages/menu/menu.module#MenuPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
