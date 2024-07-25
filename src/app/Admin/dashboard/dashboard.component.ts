import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  
})

export class DashboardComponent implements AfterViewInit{
  displayedColumns: string[] = ['position', 'name', 'weight','rating'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
 
  }

  selected = 'option3';

  constructor(private router: Router) {
    
  } 

  clickButton(path: string) {
    this.router.navigate([path]);
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  rating: number;
}




const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, rating: 3},
  {position: 2, name: 'Helium', weight: 4.0026, rating: 3},
  {position: 3, name: 'Lithium', weight: 6.941, rating: 4},

];






