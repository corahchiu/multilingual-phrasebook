import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MainLanguageColumnService {

  constructor(private http: Http) { }
  
    // Get all posts from the API
    getAllPosts() {
      return this.http.get('http://localhost:3000/api/posts')
        .map(res => res.json());
    }
}
