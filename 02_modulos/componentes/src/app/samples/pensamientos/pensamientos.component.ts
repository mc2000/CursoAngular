import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamientos',
  templateUrl: './pensamientos.component.html',
  styleUrls: ['./pensamientos.component.css']
})
export class PensamientosComponent implements OnInit {

  constructor() { }
  sIdea : string;
  aIdeas: Array<string>;
  ngOnInit() {
    this.aIdeas =[];
  }
  addIdeas ()
  {
    this.aIdeas.push (this.sIdea);
    this.sIdea ='';
  }
}
