import { Component, OnInit } from '@angular/core';
import { Chart, ChartScales, LinearScale } from 'chart.js';

@Component({
  selector: 'app-year-chart', // Check if the selector is correct
  templateUrl: './year-chart.component.html',
  styleUrls: ['./year-chart.component.scss']
})
export class YearChartComponent implements OnInit {
  title = 'chartDemo';
  ngOnInit() {
    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['2018', '2019', '2020', '2021', '2022'],
          datasets: [{
              label: 'New Tickets',
              data: [12, 19, 3, 5, 2],
              backgroundColor:"#0196FD",
              borderColor: "#0196FD",
              borderWidth: 1
          },
          {
            label: 'Solved Tickets',
            data: [19, 12, 5, 3, 1],
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