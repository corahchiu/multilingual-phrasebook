import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class LanguagesService {

  constructor(private http: Http) { }

  getAllLanguages() {
    return this.http.get('http://localhost:7474/db/data/cypher')
      .map(res => res.json());
  }

}
