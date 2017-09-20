import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../search.service'; // tue

@Component({
  selector: 'app-target-language-column',
  templateUrl: './target-language-column.component.html',
  styleUrls: ['./target-language-column.component.css']
})

export class TargetLanguageColumnComponent implements OnInit {

  targetLanguageColumns: Array<TargetLanguageColumn> = [];
  
  constructor(private searchService: SearchService) {
    this.targetLanguageColumns.push(new TargetLanguageColumn());
    this.targetLanguageColumns.push(new TargetLanguageColumn());
  }

  ngOnInit() { }

  addNewColumn(): void {
    this.targetLanguageColumns.push(new TargetLanguageColumn());
  }

  removeColumn(column): void {
    if (this.targetLanguageColumns.length > 2) {
      this.targetLanguageColumns.splice(this.targetLanguageColumns.indexOf(column), 1);
    }
  }

  moveColumnLeft(column): void {
    const i: number = this.targetLanguageColumns.indexOf(column);
    if (i > 0) {
      this.targetLanguageColumns[i] = this.targetLanguageColumns[i - 1];
      this.targetLanguageColumns[i - 1] = column;
     }
  }

  moveColumnRight(column): void {
    const i: number = this.targetLanguageColumns.indexOf(column);
    if (i < this.targetLanguageColumns.length - 1) {
      this.targetLanguageColumns[i] = this.targetLanguageColumns[i + 1];
      this.targetLanguageColumns[i + 1] = column;
     }
  }

  // wed2 - 2. Set up output event
  // @Output() //xx
  // selectedLanguage: EventEmitter<string> = new EventEmitter<string>(); //xx

  // wed4 - 9. name of object expected from app
  @Input()
  allPhrases; // allPhrases is an object of all equivalent phrases with their respect language as key

  //wed5
  targetPhrasesArr = [];

  // wed4 *important* 10. 
  // targetPhraseArr = [];

  // wed3 - 8. name of object expected from app
  // @Input()
  // targetPhrases; // this is an array of phrases specific to the target language

  //tue
  targetLanguage = ''; 
    

  // wed2 - 3. Emit targetLanguage to app on change in html. Change is 'selectedLanguage'
  selectLanguage(language) {
    this.targetLanguage = language;
    // this.selectedLanguage.emit(this.targetLanguage);//xx
    // wed5
    this.targetPhrasesArr = this.allPhrases[this.targetLanguage];
    // // wed4 *important* 11.
    // this.targetPhraseArr = this.allPhrases[this.targetLanguage];
    // console.log('phrases here')
    // console.log(this.targetPhrasesArr);

  }
}

export class TargetLanguageColumn {

  // language: string;

  // constructor(language: string) {
  //   this.language = language;
  // }
}