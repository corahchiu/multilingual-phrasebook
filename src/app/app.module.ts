import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'; //from tutorial

import { AppComponent } from './app.component';
import { MainTableComponent } from './main-table/main-table.component';
import { TargetLanguageColumnComponent } from './target-language-column/target-language-column.component';
import { SelectLanguageDropdownComponent } from './select-language-dropdown/select-language-dropdown.component';
import { MainLanguageColumnComponent } from './main-language-column/main-language-column.component';

// Service
import { MainLanguageColumnService } from './main-language-column.service'; //from tutorial

//from tutorial
const ROUTES = [
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: MainLanguageColumnComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainTableComponent,
    TargetLanguageColumnComponent,
    SelectLanguageDropdownComponent,
    MainLanguageColumnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) //from tutorial
  ],
  providers: [MainLanguageColumnService], //from tutorial
  bootstrap: [AppComponent]
})
export class AppModule { }
