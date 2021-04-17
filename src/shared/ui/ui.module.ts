import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrimeModule} from './prime/prime.module';
import { TopbarComponent } from './topbar/topbar.component';



@NgModule({
  declarations: [


    TopbarComponent
  ],
  imports: [
    CommonModule,
    PrimeModule
  ],
  exports: [
    PrimeModule,
    TopbarComponent
  ]
})
export class UiModule { }
