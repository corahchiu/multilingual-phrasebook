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
  mainPhrase = '';

  // wed2 - 8. input selectedTargetLanguage from app.comp.ts
  @Input()
  selectedTargetLanguage;
  
  //wed4 1. create output for all equivalent phrases got from server
  phrasesObj = {};  
  //wed4 3. create eventemitter
  @Output()
  onSendAllPhrases = new EventEmitter()

  // targetPhrases = [];   // wed3 - 4.  
  // // wed3 - 3.
  // @Output()
  // onSendTargetPhrases = new EventEmitter()
  
  
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
      var object = phrases.json();
      this.mainPhrase = Object.values(object)[0]; // result is phrase
      
      //wed4 2. get obj from server's post function and store it in this.phraseObj. 4. emit event to app
      this.phrasesObj = object;
      this.onSendAllPhrases.emit(this.phrasesObj);

      // this.targetPhrases = Object.values(object)[1]; // don't delete. wed3 result is an array
      // this.onSendTargetPhrases.emit(this.targetPhrases); // don't delete. wed3 - 5.
    })
  }
}