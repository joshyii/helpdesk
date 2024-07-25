import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router'; 
import { faEye, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pending-approval-article-list',
  templateUrl: './pending-approval-article-list.component.html',
  styleUrls: ['./pending-approval-article-list.component.scss'],
})
export class PendingApprovalArticleListComponent implements AfterViewInit{
  displayedColumns: string[] = ['title', 'category', 'created_by', 'created_on', 'version', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  faEye = faEye;
  faSearch = faSearch;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private router: Router) {
  } 
  
  clickButton(path: string) {
    this.router.navigate([path]);
  } 
}

export interface PeriodicElement {
  title: string;
  category: string;
  created_by: string;
  created_on: string;
  version: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {title: 'Hydrogen', category: 'H', created_by:'Brinn', created_on: '10/10/2021', version: 10},
  {title: 'Helium', category: 'He', created_by:'Kenneth', created_on: '22/09/2019', version: 5},
  {title: 'Lithium', category: 'Li', created_by:'Munmro', created_on: '15/01/2023', version: 3},
];
