import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Ultimate Multilingual Phrasebook';

  //wed2 - 5. Catch the event from app html<target>, 7. Send the event to main from html<main>
  selectedTargetLanguage ='';
  selectLanguage(language){
    this.selectedTargetLanguage = language;
    // alert(this.selectedLanguage);
  }

  //wed3 - 2. define function
  sendTargetPhrases(phrases) {
    alert('hi');
  }
}
