import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

  constructor(private http: Http) { }
// this obj is sent from component, same as the obj in searchPhrase() in component  
  // wed2 - 10. obj received from main, sent to server 
  searchPhrase(obj: object) {
      // console.log('obj from service here');
      // console.log(obj);
      return this.http.post('http://localhost:3000/search', obj)
    }

}
