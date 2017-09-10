import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainTableComponent } from './main-table/main-table.component';
import { TargetLanguageColumnComponent } from './target-language-column/target-language-column.component';
import { SelectLanguageDropdownComponent } from './select-language-dropdown/select-language-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    MainTableComponent,
    TargetLanguageColumnComponent,
    SelectLanguageDropdownComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
