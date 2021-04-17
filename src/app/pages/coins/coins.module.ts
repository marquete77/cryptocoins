import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UiModule} from '../../../shared/ui/ui.module';

// Router
import {CoinsRoutingModule} from './coins.routes';

// Component
import { ListComponent } from './list/list.component';
import { CoinComponent } from './coin/coin.component';
import {PaginatorModule} from 'primeng/paginator';


@NgModule({
  declarations: [
    ListComponent,
    CoinComponent
  ],
  imports: [
    CommonModule,
    CoinsRoutingModule,
    UiModule,
    PaginatorModule
  ]
})
export class CoinsModule { }
