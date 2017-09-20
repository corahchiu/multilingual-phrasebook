import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-main-language-column',
  templateUrl: './main-language-column.component.html',
  styleUrls: ['./main-language-column.component.css'],
})
export class MainLanguageColumnComponent implements OnInit {

  language = ''; // is this sent to service?
  phrase = ''; // is this sent to service?
  phrasesObj = {};
  mainPhrase = '';
  // phrases: Array<phrase> = [];
  // @Input()
  // searchedPhrase: EventEmitter<string> = new EventEmitter<string>();
  
  constructor(private searchService: SearchService) { } 
  
  ngOnInit() { }

  selectLanguage(language) {
    this.language = language;
  }

  searchPhrase(){
    // this obj is the request of values of the language and phrase being searched, and is sent to service
    var obj = {language: this.language, phrase: this.phrase};
    // this is the response from server then service
    this.searchService.searchPhrase(obj).subscribe(phrases => {
      var phrasesObj = phrases.json();
      this.mainPhrase = Object.values(phrasesObj)[0]; // result: Szia
    })
  }
}