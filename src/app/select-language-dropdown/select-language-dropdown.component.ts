import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LanguagesService } from '../languages.service';

@Component({
  selector: 'app-select-language-dropdown',
  templateUrl: './select-language-dropdown.component.html',
  styleUrls: ['./select-language-dropdown.component.css']
})
export class SelectLanguageDropdownComponent implements OnInit {

  languages: Array<any> = [];

  @Output()
  selectedLanguage: EventEmitter<string> = new EventEmitter<string>();
  
  @Input() 
  targetLanguageColumn = {};
  
  constructor(private languagesService: LanguagesService) { }
  
  ngOnInit() {
      // retrieve languages.json from express
    this.languagesService.getAllLanguages().subscribe(languages => {
      this.languages = languages;  
    });
  }

  onLanguageSelect(language:string) {
    this.selectedLanguage.emit(language);
  }

}
