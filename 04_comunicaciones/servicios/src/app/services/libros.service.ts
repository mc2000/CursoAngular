import { Injectable } from '@angular/core';

@Injectable()
export class LibrosService {

  aDatos: Array<string>;

  constructor() { 
    this.aDatos = ['angular avanzado', 'angular para torpes', 'angular Ninja'];
  }
  buscarLibros ( clave:string)  
  {
      return this.aDatos;
  }
}
