import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {SplitButtonModule} from 'primeng/splitbutton';
import {ButtonModule} from 'primeng/button';
import { GlobeComponent } from './components/globe/globe.component';


@NgModule({
  declarations: [
    AppComponent,
    GlobeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SplitButtonModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
