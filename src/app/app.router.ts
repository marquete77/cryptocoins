import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NoPageFoundComponent} from '../shared/components/no-page-found/no-page-found.component';


const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
  },

  { path: '**', component: NoPageFoundComponent },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
