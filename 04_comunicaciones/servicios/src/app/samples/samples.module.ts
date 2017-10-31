import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PadreComponent } from './padre/padre.component';
import { GoogleComponent } from './google/google.component';
import { ServicioComponent } from './servicio/servicio.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [PadreComponent, GoogleComponent, ServicioComponent],
  exports: [PadreComponent, GoogleComponent,ServicioComponent]
})
export class SamplesModule { }
