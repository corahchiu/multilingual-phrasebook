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

  targetLanguages: Array<TargetLanguageColumn> = [];

  constructor() { }

  ngOnInit() {
  }

  addNewColumn(): void {
    this.targetLanguages.push(new TargetLanguageColumn());
  }

  removeColumn(column): void {
    this.targetLanguages.splice(this.targetLanguages.indexOf(column), 1);
  }

  moveColumnLeft(column): void {
    const i: number = this.targetLanguages.indexOf(column);
    if (i > 0) {
      this.targetLanguages[i] = this.targetLanguages[i - 1];
      this.targetLanguages[i - 1] = column;
     }
  }

  moveColumnRight(column): void {
    const i: number = this.targetLanguages.indexOf(column);
    if (i < this.targetLanguages.length - 1) {
      this.targetLanguages[i] = this.targetLanguages[i + 1];
      this.targetLanguages[i + 1] = column;
     }
  }

}

export class TargetLanguageColumn {

  // language: string;

  // constructor(language: string) {
  //   this.language = language;
  // }
}