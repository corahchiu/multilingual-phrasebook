import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Ultimate Multilingual Phrasebook';

  //wed
  selectedLanguage ='';
  selectLanguage(event){
    this.selectedLanguage = event;
    alert(this.selectedLanguage);
  }
}
