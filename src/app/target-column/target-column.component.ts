import { Component, OnInit, NgModule } from '@angular/core';
import { SelectLanguageDropdownComponent } from '../select-language-dropdown/select-language-dropdown.component';

@Component({
  selector: 'app-target-column',
  templateUrl: './target-column.component.html',
  styleUrls: ['./target-column.component.css']
})

@NgModule({
  declarations: [SelectLanguageDropdownComponent]
})

export class TargetColumnComponent implements OnInit {

  targets: Array<TargetColumn> = [];
  // i: number;

  constructor() { }

  ngOnInit() {
  }

  addNewColumn(): void {
    this.targets.push(new TargetColumn('new language', 'new phrase'));
  }

  // removeColumn(TargetColumn): void {
  //   this.targets.splice(this.targets.indexOf(TargetColumn), 1);
  // }

  removeColumn(column): void {
    this.targets.splice(this.targets.indexOf(column), 1);
  }

}

export class TargetColumn {

  language: string;
  phrase: string;

  constructor(language: string, phrase: string) {
    this.language = language;
    this.phrase = phrase;

  }
}