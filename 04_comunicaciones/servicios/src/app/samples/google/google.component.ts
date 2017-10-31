import { element } from 'protractor';
import { Http, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';


const URL= 'https://www.googleapis.com/books/v1/volumes?q=intitle:';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})

export class GoogleComponent implements OnInit {

  sClave: string;
  aLibros : Array<string>;
  
  
  constructor(private http:Http) { 
    //se crea un this..librosServices apuntando al objeto lib de la calse librosservices
  }


  ngOnInit() {
    this.sClave='';
    this.aLibros = [];
  }
  btnBuscar()
  {
   this.http.get (URL+this.sClave).subscribe(
     (response) =>{ 
       
      const aData = response.json();
      aData.items.forEach(element => {
        this.aLibros.push(element.volumeInfo.title)
      });
      
      //console.log(response.json()); 
    }, //ok
     (error) => {console.log (error); } // error
   );
  
    //this.sClave ='';  
  }

}
