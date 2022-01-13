import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  public installations: Number;
  public dailyEarnings: Number;
  public dailyRegistrations: Number;
  public tickets: Number;
  constructor() {
    this.installations = 999;
    this.dailyEarnings = 8888;
    this.dailyRegistrations = 22;
    this.tickets = 44;

  }

  ngOnInit(): void {
    
  }

}
