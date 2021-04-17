import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routes
import {PagesRoutingModule} from './pages.routes';
import { HomeComponent } from './home/home.component';
import { CoinsComponent } from './coins/coins.component';
import {UiModule} from '../../shared/ui/ui.module';
import {CryptoHomeCardComponent} from '../../shared/components/crypto-home-card/crypto-home-card.component';
import {AccordionModule} from 'primeng/accordion';


@NgModule({
  declarations: [
    HomeComponent,
    CoinsComponent,
    CryptoHomeCardComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    UiModule,
  ],
  exports: [
  ]
})
export class PagesModule { }
