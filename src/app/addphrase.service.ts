import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AddphraseService {

  constructor(private http: Http) { }

  addPhrase(obj: object) {
      console.log('obj from addphrase service here');
      console.log(obj);
      return this.http.post('http://localhost:3000/addphrase', obj)
    }

}
