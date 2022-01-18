import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styles: [
  ]
})
export class ContentHeaderComponent implements OnInit {

  public title: String;
  constructor(private titleService:Title) {
    this.title="";
   }

  ngOnInit(): void {
  }
  setTitle(){
    this.title=this.titleService.getTitle();
  }

}
