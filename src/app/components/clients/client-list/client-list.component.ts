import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

 private title:String

  constructor( private titleService:Title) { 
    this.titleService.setTitle("Client List - AdminLTE")
    this.title="Lista de clientes"
  }

  ngOnInit(): void {
  }

}
