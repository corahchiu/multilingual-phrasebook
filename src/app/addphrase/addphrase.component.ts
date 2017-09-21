import { Component, OnInit, Input } from '@angular/core';
import { AddphraseService } from '../addphrase.service';

@Component({
  selector: 'app-addphrase',
  templateUrl: './addphrase.component.html',
  styleUrls: ['./addphrase.component.css']
})

export class AddphraseComponent implements OnInit {

  constructor(private addphraseService: AddphraseService) { }

  ngOnInit() {
  }


  languageOne = '';
  phraseOne = '';
  languageTwo = '';
  phraseTwo = '';
  
  selectLanguageOne(language){
    console.log('run');
    this.languageOne = language;
  }
  selectLanguageTwo(language){
    this.languageTwo = language;
  }
  submitPhrase () {
    var obj = {languageOne: this.languageOne, phraseOne: this.phraseOne, languageTwo: this.languageTwo, phraseTwo: this.phraseTwo};

    this.addphraseService.addPhrase(obj).subscribe(phrases => {
      var object = phrases.json();
    })
    console.log('obj from component');
    console.log(obj);
  }
}

