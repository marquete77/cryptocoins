import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {PagesComponent} from './pages.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,

    children: [
      {
        path: '', component: HomeComponent
      },

      // Coins
      { path: '', loadChildren: () => import('./coins/coins.module').then(m => m.CoinsModule) },

      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
