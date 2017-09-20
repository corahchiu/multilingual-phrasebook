import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  // wed
  @Output()
  selectedLanguage: EventEmitter<string> = new EventEmitter<string>();

  //tue
  targetLanguage = '';   
  targetPhrases = []; // wed

  selectLanguage(language) {
    this.targetLanguage = language;
    this.selectedLanguage.emit(this.targetLanguage); //wed
  }
  
  //tue - how to connect this to the event in main, coz it's not in target html
  searchPhrase(){
    var obj = {targetLanguage: this.targetLanguage};
    console.log('target language obj here');
    console.log(obj);

    //wed
    this.searchService.searchPhrase(obj).subscribe(phrases => {
      var phrasesObj = phrases.json();
      this.targetPhrases = Object.values(phrasesObj)[1]; // result: array of translated phrases
    });
  }

}

export class TargetLanguageColumn {

  // language: string;

  // constructor(language: string) {
  //   this.language = language;
  // }
}