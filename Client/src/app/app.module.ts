import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [ 
    BrowserModule, 
    CommonModule,
    FormsModule,
    AppRoutingModule, 
    CoreModule 
  ],
  declarations: [ 
    AppComponent, 
    AppRoutingModule.components 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
