import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  
  @Input()
  nombre :string;
  @Output()
  eventBorrar  = new  EventEmitter<string>();
  nombreSele :string;

  constructor() {
    //los eventos se deben crear en el constructor
    // this.eventBorrar = new EventEmitter(); 
   }

  ngOnInit() {
    
  
  }
  btnBorrar()
  {
    this.nombre=this.nombreSele;
    //lanzo el evento
    this.eventBorrar.emit(this.nombreSele);
    

  }

}
