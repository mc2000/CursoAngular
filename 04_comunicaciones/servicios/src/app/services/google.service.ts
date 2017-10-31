import { Http , Response  } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

const URL= 'https://www.googleapis.com/books/v1/volumes?q=intitle:';

@Injectable()
export class GoogleService {

  aLibros : Array<string>;
  constructor(private http:Http) { }

  getBooks(title: string) {
       return this.http.get(URL+ title).map(
          response => this.extractTitles(response));
      }
    
      private extractTitles(response: Response) {
        return response.json().items.map(book => book.volumeInfo.title);
      }
}
