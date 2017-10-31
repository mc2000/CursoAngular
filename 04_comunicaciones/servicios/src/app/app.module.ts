import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SharedModule } from './shared/shared.module';
import { SamplesModule } from './samples/samples.module';
import { AppComponent } from './app.component';
import { ServicesModule } from './services/services.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    SamplesModule,
    ServicesModule, 
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
