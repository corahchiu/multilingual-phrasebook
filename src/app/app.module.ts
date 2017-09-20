import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'; //from tutorial

import { AppComponent } from './app.component';
import { TargetLanguageColumnComponent } from './target-language-column/target-language-column.component';
import { SelectLanguageDropdownComponent } from './select-language-dropdown/select-language-dropdown.component';
import { MainLanguageColumnComponent } from './main-language-column/main-language-column.component';

import { LanguagesService } from './languages.service';
import { SearchService } from './search.service';
import { SingleTargetLanguageColumnComponent } from './single-target-language-column/single-target-language-column.component';

@NgModule({
  declarations: [
    AppComponent,
    TargetLanguageColumnComponent,
    SelectLanguageDropdownComponent,
    MainLanguageColumnComponent,
    SingleTargetLanguageColumnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LanguagesService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
