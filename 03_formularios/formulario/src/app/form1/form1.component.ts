import { Component, OnInit, ViewChild } from '@angular/core';

interface   Usuario
{
  firstName: string;
  lastName:string;
  phoneNumber:string;
  
 
}
interface  Departamento 
{
  nombre: string;
  codigo :string | number;
}

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})


export class Form1Component implements OnInit {

  user :Usuario;
  impresoraSeleccionada:string;
  aImpresoras:Array<string>;
  isClaro :boolean;
  isColor:boolean;
  aDepartamentos:Array<Departamento>;

departamentoSelecionado  : Departamento;
  
  @ViewChild('myform')
  formLocal:any;
  constructor() { }

  ngOnInit() {
  this.user = {firstName:'', lastName:'', phoneNumber: ''};
  this.aImpresoras=['HP', 'Cannon', 'Brother', 'Lexmark'];
  this.isClaro=false;
  this.isColor=false;
  this.aDepartamentos = [
    {nombre: 'rrhh', codigo:1}, 
                         {nombre: 'marketing', codigo:'4'},
                         {nombre: 'financiero', codigo:'3'}, 
                         { nombre: 'sistemas', codigo:2}];
  //this.impresoraSeleccionada='';
  }
 
  avisarPrint()
  {
     console.log(this.isColor);
  }
  avisarDepartento()
  {
    console.log(this.departamentoSelecionado);
  }
  borrar() 
  {
  /*  this.user = {firstName:'', lastName:'', phoneNumber: ''};
    this.isClaro=false;
    this.isColor=false;
    this.impresoraSeleccionada=null;
    this.departamentoSelecionado=null;
    */
    this.formLocal.reset();
  }
  enviar() 
  {
    console.log(this.formLocal);
    if (this.formLocal.valid)
      console.log('enviado');
      else  console.log('Error');
      //alert ('rrrrr');

  }
}
