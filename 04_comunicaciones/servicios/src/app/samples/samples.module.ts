import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PadreComponent } from './padre/padre.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [PadreComponent],
  exports: [PadreComponent]
})
export class SamplesModule { }