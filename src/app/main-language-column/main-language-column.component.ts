import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-main-language-column',
  templateUrl: './main-language-column.component.html',
  styleUrls: ['./main-language-column.component.css'],
})
export class MainLanguageColumnComponent implements OnInit {

  language = '';
  phrase = ''; // is this from service?
  searchedPhrase = '';
  // phrases: Array<phrase> = [];
  // @Input()
  // searchedPhrase: EventEmitter<string> = new EventEmitter<string>();
  
  constructor(private searchService: SearchService) { } 
  
  ngOnInit() { }

  selectLanguage(language) {
    this.language = language;
  }

  searchPhrase(){
    console.log('phrase here');
    console.log(this.phrase);
    var obj = {language: this.language, phrase: this.phrase};
    
    this.searchService.searchPhrase(obj).subscribe(phrase => {
      this.searchedPhrase = phrase.json().properties.phrase;
      // console.log('searched phrase here');
      // console.log(this.searchedPhrase);
    })
  }
}