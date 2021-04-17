import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';
import {FieldsetModule} from 'primeng/fieldset';
import {ToolbarModule} from 'primeng/toolbar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    AccordionModule,
    FieldsetModule,
    ToolbarModule,
    ProgressSpinnerModule,
  ],
  exports: [
    ButtonModule,
    AccordionModule,
    FieldsetModule,
    ToolbarModule,
    ProgressSpinnerModule,
  ]
})
export class PrimeModule { }
