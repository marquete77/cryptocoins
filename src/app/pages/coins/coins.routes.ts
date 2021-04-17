import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoinsComponent} from './coins.component';
import {ListComponent} from './list/list.component';
import {CoinComponent} from './coin/coin.component';

const routes: Routes = [
  {
    path: '',
    component: CoinsComponent,
    children: [
      {
        path: 'coins/list',
        component: ListComponent,
      },
      {
        path: 'coins/details/:id',
        component: CoinComponent,
      },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CoinsRoutingModule { }
