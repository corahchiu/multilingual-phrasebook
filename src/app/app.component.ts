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

  //wed4 - 5. define obj to send
  allPhrases = {};
  // wed4 - 6. define function
  sendAllPhrases(phrases){
    this.allPhrases = phrases;
    // console.log(this.allPhrases);
  } 

  // // don't delete:
  // //wed3 - 6. define phrases to send
  // targetPhrases = [];
  // //wed3 - 2. define function
  // sendTargetPhrases(phrases) {
  //   this.targetPhrases = phrases;
  // }
}
