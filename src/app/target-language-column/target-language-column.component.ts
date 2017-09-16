import { Component, OnInit, NgModule } from '@angular/core';
import { SelectLanguageDropdownComponent } from '../select-language-dropdown/select-language-dropdown.component';

@Component({
  selector: 'app-target-language-column',
  templateUrl: './target-language-column.component.html',
  styleUrls: ['./target-language-column.component.css']
})

@NgModule({
  declarations: [SelectLanguageDropdownComponent]
})

export class TargetLanguageColumnComponent implements OnInit {

  targetLanguageColumns: Array<TargetLanguageColumn> = [];
  
  constructor() {
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

  search(): void {
    // todo
  }

}

export class TargetLanguageColumn {

  // language: string;

  // constructor(language: string) {
  //   this.language = language;
  // }
}