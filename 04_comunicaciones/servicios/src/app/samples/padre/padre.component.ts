import { Component, OnInit } from '@angular/core';
import {LibrosService} from './../../services/libros.service'

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  sClave: string;
  aLibros : Array<string>;
  constructor(private librosService: LibrosService) { 
    //se crea un this..librosServices apuntando al objeto lib de la calse librosservices
  }


  ngOnInit() {
    this.sClave='';
    this.aLibros = [];
  }
  btnBuscar()
  {
    this.aLibros = this.librosService.buscarLibros (this.sClave);
    this.sClave ='';
  }
  
}
