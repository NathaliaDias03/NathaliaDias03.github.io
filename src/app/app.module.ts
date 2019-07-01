import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule, MatButtonModule} from '@angular/material';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SearchComponent } from './search/search.component';
import { SearchService } from "./services/search.service";
import { AngularFontAwesomeModule } from 'angular-font-awesome';




@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    AngularFontAwesomeModule,
    CommonModule
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
