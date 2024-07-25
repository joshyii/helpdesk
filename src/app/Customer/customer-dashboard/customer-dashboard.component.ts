import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss']
})
export class CustomerDashboardComponent implements AfterViewInit {

  displayedColumns: string[] = ['subject', 'description', 'category', 'priority', 'status','assigned_to', 'last_update', 'date_submitted', 'rating'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  displayedColumns1: string[] = ['noti_title','noti_content'];
  dataSource1 = new MatTableDataSource<NotiElement>(ELEMENT_DATA1);

  displayedColumns2: string[] = ['art_title','art_content'];
  dataSource2 = new MatTableDataSource<ArticleElement>(ELEMENT_DATA2);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource1.paginator = this.paginator;
  }

  

  constructor(private router: Router) {
    
  } 
  
  clickButton(path: string) {
    this.router.navigate([path]);
  } 
}



export interface PeriodicElement {
  subject: string;
  description: string;
  category: string;
  priority: string;
  status: string;
  assigned_to: string;
  last_update: string;
  date_submitted: string;
  rating: number;
}

export interface NotiElement {
  noti_title: string;
  noti_content: string;
}

export interface ArticleElement {
  art_title: string;
  art_content: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {subject: 'Unstable Internet Connection', description: 'I have tried multiple times ...', category: 'Performance',priority:'Low', status:'Solved',assigned_to:'Ben Chen', last_update: '08-07-2023', date_submitted:'30-06-2023',rating: 4 },
  {subject: 'Cannot Submit Form', description: 'I have tried multiple times ...', category: 'Bugs',priority:'Medium', status:'Solved',assigned_to:'Sam Wong', last_update: '08-07-2023', date_submitted:'30-06-2023',rating: 3 },
  {subject: 'Slow Response Time  1', description: 'I have been using the sys ...', category: 'Performance',priority:'High', status:'Assigned',assigned_to:'Daniel Tan', last_update: '08-07-2023', date_submitted:'07-07-2023',rating: 2 },

];

const ELEMENT_DATA1: NotiElement[] = [
  {noti_title: 'Your feedback matters to us.', noti_content:'Please leave a review and share your experience to us.. '},
  {noti_title: 'Your ticket for “Cannot submit form” has been closed. ', noti_content:'You may reach us if you still have unresolved issues or concern...'},
  {noti_title: 'Daniel replied to “Slow Response Time”', noti_content:'Hi, I am sorry to hear that, can you verify what’s the version of the software ...'},
]

const ELEMENT_DATA2: ArticleElement[] = [
  {art_title: 'Installing Node.js [Installation]', art_content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ...'},
  {art_title: 'Installing Angular [Installation]', art_content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ...'},
  {art_title: 'Debugging the system [Debugging]', art_content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ...'},
  
  
]

