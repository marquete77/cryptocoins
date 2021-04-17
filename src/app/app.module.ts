import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import {UiModule} from '../shared/ui/ui.module';

// Router
import {AppRoutingModule} from './app.router';

// Components
import { AppComponent } from './app.component';
import { NoPageFoundComponent } from '../shared/components/no-page-found/no-page-found.component';
import { PagesComponent } from './pages/pages.component';
import {ApiModule} from './api/api.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NoPageFoundComponent,
    PagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    UiModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
