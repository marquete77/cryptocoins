import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinsService } from './rest/coins.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    CoinsService
  ]
})
export class ApiModule { }
