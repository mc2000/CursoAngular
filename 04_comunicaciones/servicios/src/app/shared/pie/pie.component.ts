import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pie',
    template: `<footer>
    <p>{{autor}} - {{empresa}}</p>
   </footer>`
    
  /*,styles : [`footer{
     text-align: center;
     font-size: S0.9em;
     color: papayawhip;
     margin: 0.5em,
     bottom: 0;
     }',
     footer p{
     width: 40%;
     margin: 1emauto
     }`] 
     */
})

export class PieComponent implements OnInit {
    constructor() { }
 autor: string;
 empresa: string;
    ngOnInit() { 
        this.autor="M.Cruz ";
        this.empresa="ica";
    }
}