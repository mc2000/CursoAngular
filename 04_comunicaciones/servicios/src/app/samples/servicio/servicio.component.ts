import { Component, OnInit } from '@angular/core';
import {GoogleService} from './../../services/google.service'
import 'rxjs/Rx';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  sClave: string;
  aLibros : Array<string>;
  
  constructor(private googleService: GoogleService) { }

  ngOnInit() {
    this.sClave='';
    this.aLibros = [];
  }
  btnBuscar()
  {
  
    this.googleService.getBooks(this.sClave).subscribe(
      (response)=>{this.aLibros = response},
      (error)=>{console.log (error); }
    );
    this.sClave ='';  
  }

}
