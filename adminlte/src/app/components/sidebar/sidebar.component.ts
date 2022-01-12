import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  public username: String;
  constructor() {
    this.username = "admin";
   }

  ngOnInit(): void {
  }

}
