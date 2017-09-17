import { Component, OnInit } from '@angular/core';
import { MainLanguageColumnService } from '../main-language-column.service'; //from tutorial

@Component({
  selector: 'app-main-language-column',
  templateUrl: './main-language-column.component.html',
  styleUrls: ['./main-language-column.component.css'],
})
export class MainLanguageColumnComponent implements OnInit {

  // phrases: Array<phrase> = [];
  
  constructor(private phrasesService: MainLanguageColumnService) { }
  
  ngOnInit() {
      // Retrieve posts from the API
      // this.phrasesService.getAllPosts().subscribe(posts => {
        // this.posts = posts;
      };
  }

  // chooseLanguage(){

  // }

  // searchPhrase(){
    
  // }

}
