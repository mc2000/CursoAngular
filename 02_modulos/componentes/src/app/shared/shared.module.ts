import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoComponent } from './logo/logo.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ LogoComponent,
    CabeceraComponent,
    PieComponent 
  ],
  exports: [ 
    CabeceraComponent,
    PieComponent ]
})
export class SharedModule { }
