import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class LanguagesService {

  constructor(private http: Http) { }

  getAllLanguages() {
    return this.http.get('')
      .map(res => res.json());
  }

}
