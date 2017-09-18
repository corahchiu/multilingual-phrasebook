import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

  constructor(private http: Http) { }
  
    searchPhrase(obj: object) {
      return this.http.post('http://localhost:3000/search', obj)
    }

}
