import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router'; 
import { faEdit, faEye, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-agent-all-article-list',
  templateUrl: './agent-all-article-list.component.html',
  styleUrls: ['./agent-all-article-list.component.scss']
})
export class AgentAllArticleListComponent implements AfterViewInit {

  displayedColumns: string[] = ['title', 'category', 'created_by', 'published_at', 'version', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  faEdit = faEdit;
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
  published_at: string;
  version: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {title: 'Hydrogen', category: 'H', created_by:'Brinn', published_at: '10/10/2021', version: 10},
  {title: 'Helium', category: 'He', created_by:'Kenneth', published_at: '22/09/2019', version: 5},
  {title: 'Lithium', category: 'Li', created_by:'Munmro', published_at: '15/01/2023', version: 3},
];