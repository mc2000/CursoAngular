import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  constructor() { }
  @ViewChild('name') eName:any;

  ngOnInit() {
    this.eName.nativeElement='maria';
  }

}
