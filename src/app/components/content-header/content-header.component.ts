import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styles: [
  ]
})
export class ContentHeaderComponent implements OnInit {

  public title: String;
  constructor() {
    this.title="Panel";
   }

  ngOnInit(): void {
  }

}
