import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../languages.service';

@Component({
  selector: 'app-select-language-dropdown',
  templateUrl: './select-language-dropdown.component.html',
  styleUrls: ['./select-language-dropdown.component.css']
})
export class SelectLanguageDropdownComponent implements OnInit {

  // languages: Array<Language> = [];
  languages: any = [];
  
  constructor(private languagesService: LanguagesService) { }
  
  ngOnInit() {
      // Retrieve posts from the API
      this.languagesService.getAllLanguages().subscribe(languages => {
        this.languages = languages;
  });

  }
}
