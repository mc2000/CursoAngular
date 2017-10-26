import { Component, OnInit , ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class PipesComponent implements OnInit {

  sNombre:string;
  nEdad:number;
  nPrecio: number;
  oDatos;
  dFecha: Date;
  constructor() { }

  ngOnInit() {
   this.sNombre='pepe';
   this.nPrecio=39;
   this.nEdad=18;
   this.oDatos= {Nombre: 'Pepe', 
        apellidos:'perez'};
   this.dFecha= new Date();
  }

  btBorrar ()
{
  this.sNombre='';
  this.nEdad=0;
}
}
