import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})
export class MainTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addColumn() {
    console.log('clicked');
    // $('#language-table tr').each(function(){
    //   $(this).append('<td>added</td>');
  //  })

  }

}
