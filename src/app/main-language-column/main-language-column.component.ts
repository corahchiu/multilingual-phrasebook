import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  // wed2 - 8. input selectedTargetLanguage from app.comp.ts
  @Input()
  selectedTargetLanguage;
  
  // wed3 - 4.
  targetPhrases = []; 
  //wed3 - 3.
  @Output()
  onSendTargetPhrases = new EventEmitter();

  constructor(private searchService: SearchService) { } 
  
  ngOnInit() { }

  selectLanguage(language) {
    this.language = language;
  }

  searchPhrase(event){
    // this obj is the request of values of the languages and phrase being searched, and is sent to service
    // wed2 - 9. set up obj to be sent to search.service
    var obj = {language: this.language, phrase: this.phrase, targetLanguage: this.selectedTargetLanguage};
    // this is the response from server then service
    this.searchService.searchPhrase(obj).subscribe(phrases => {
      var phrasesObj = phrases.json();
      this.mainPhrase = Object.values(phrasesObj)[0]; // result is phrase
      this.targetPhrases = Object.values(phrasesObj)[1]; // wed3 result is an array
      this.onSendTargetPhrases.emit(this.targetPhrases); // wed3 - 5.
    })
  }
}