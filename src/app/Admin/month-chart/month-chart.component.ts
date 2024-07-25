import { Component, OnInit } from '@angular/core';
import { Chart, ChartScales, LinearScale } from 'chart.js';

@Component({
  selector: 'app-month-chart', // Check if the selector is correct
  templateUrl: './month-chart.component.html',
  styleUrls: ['./month-chart.component.scss']
})
export class MonthChartComponent implements OnInit {
  title = 'chartDemo';
  ngOnInit() {
    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October','November','December'],
          datasets: [{
              label: 'New Tickets',
              data: [12, 19, 3, 5, 2, 3, 13, 18, 20, 16, 17, 15],
              backgroundColor:"#0196FD",
              borderColor: "#0196FD",
              borderWidth: 1
          },
          {
            label: 'Solved Tickets',
            data: [19, 12, 5, 3, 1, 6, 6, 8 , 12, 30, 45, 20 ],
            backgroundColor:"#FFAF00",
            borderColor: "#FFAF00",
            borderWidth: 1
        }]
      },
      options: {
          scales: {
              yAxes: [{
                  type: 'linear',
                  beginAtZero: true
              } as LinearScale] as ChartScales[]
          }
      }
  });
  }
}