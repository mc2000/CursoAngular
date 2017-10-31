import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoComponent } from './logo/logo.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ LogoComponent,
    CabeceraComponent,
    PieComponent,
    MenuComponent 
  ],
  exports: [ 
    CabeceraComponent,
    PieComponent ,MenuComponent]
})
export class SharedModule { }
