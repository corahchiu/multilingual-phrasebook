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
  @Output()
  selectedLanguage: EventEmitter<string> = new EventEmitter<string>();

  // wed3 - 8. name of object expected from app
  @Input()
  targetPhrases;

  //tue
  targetLanguage = '';   
  // targetPhrases = []; // wed*

  // wed2 - 3. Emit targetLanguage to app on change in html. Change is 'selectedLanguage'
  selectLanguage(language) {
    this.targetLanguage = language;
    this.selectedLanguage.emit(this.targetLanguage);
  }

}

export class TargetLanguageColumn {

  // language: string;

  // constructor(language: string) {
  //   this.language = language;
  // }
}