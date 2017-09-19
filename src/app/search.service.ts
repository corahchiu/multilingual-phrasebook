import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

  constructor(private http: Http) { }
  
    searchPhrase(obj: object) {
      console.log('obj here');
      console.log(obj);
      return this.http.post('http://localhost:3000/search', obj)
    }

}
