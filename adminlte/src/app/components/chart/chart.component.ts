import { Component, OnInit, ViewChild} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styles: [
  ]
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  canvas:any;
  ctx:any;
  @ViewChild("chart") chart:any;

  ngAfterViewInit(){
    this.canvas = this.chart.nativeElement;
    this.ctx = this.canvas.getContext("2d");
    new Chart(this.ctx,{
      type:"line",
      data:{
        datasets:[{
          label:"Current Value",
          data:[0,20,40,50],
          backgroundColor:"rgb(115 185 143 / 65%)",
          borderColor:"#007ee7"
        }]
      }

    });
  }

}
