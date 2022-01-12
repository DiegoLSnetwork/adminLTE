import { Component, OnInit, ViewChild} from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styles: [
  ]
})
export class ChartComponent {

  constructor() { }



  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40, 110 ],
        label: 'Monthly earnings',
        backgroundColor: '#007BFF30',
        borderColor: '#007BFF',
        pointBackgroundColor: '#007BFF30',
        pointBorderColor: '#007BFF',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      }
    
    ],
    labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', "August" ]
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0':
        {
          position: 'left',
        },
      'y-axis-1': {
        position: 'right',
        grid: {
          color: 'rgba(0,0,0,0.3)',
        },
        ticks: {
          display:false,
          color: 'black'
        }
      }
    },

    plugins: {
      legend: { display: true },
     /* annotation: {
        annotations: [
          {
            type: 'line',
            scaleID: 'x',
            value: 'March',
            borderColor: 'orange',
            borderWidth: 2,
            label: {
              position: 'center',
              enabled: true,
              color: 'orange',
              content: 'LineAnno',
              font: {
                weight: 'bold'
              }
            }
          },
        ],
      }*/
    }
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

 

}
