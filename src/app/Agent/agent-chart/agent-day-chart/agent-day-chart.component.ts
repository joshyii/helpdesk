import { Component, OnInit } from '@angular/core';
import { Chart, ChartScales, LinearScale } from 'chart.js';

@Component({
  selector: 'app-agent-day-chart', // Check if the selector is correct
  templateUrl: './agent-day-chart.component.html',
  styleUrls: ['./agent-day-chart.component.scss']
})
export class AgentDayChartComponent implements OnInit {
  title = 'chartDemo';
  ngOnInit() {
    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday','Saturday','Sunday'],
          datasets: [{
              label: 'New Tickets',
              data: [12, 19, 3, 5, 2, 3, 13],
              backgroundColor:"#0196FD",
              borderColor: "#0196FD",
              borderWidth: 1
          },
          {
            label: 'Solved Tickets',
            data: [19, 12, 5, 3, 1, 6, 6, 8  ],
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