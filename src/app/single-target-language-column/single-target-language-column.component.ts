import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-target-language-column',
  templateUrl: './single-target-language-column.component.html',
  styleUrls: ['./single-target-language-column.component.css']
})
export class SingleTargetLanguageColumnComponent implements OnInit {
  
  @Output()
  selectedLanguage: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  targetPhrasesArr; //this is not being received, i think. I don't know why


  constructor() { }
  
  ngOnInit() { }

  //tue
  targetLanguage = '';   
  targetPhrases = [];
  
    // wed2 - 3. Emit targetLanguage to app on change in html. Change is 'selectedLanguage'
    selectLanguage(language) {
      this.targetLanguage = language;
      this.targetPhrases = this.targetPhrasesArr[this.targetLanguage];
      this.selectedLanguage.emit(this.targetLanguage);
      // wed5
      // this.targetPhrasesArr = this.allPhrases[this.targetLanguage];
      // // wed4 *important* 11.
      // this.targetPhraseArr = this.allPhrases[this.targetLanguage];
      // console.log('targetPhraseArr here')
      console.log(this.targetLanguage); // this fxn only runs once, why
  
    }

}
