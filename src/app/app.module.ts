import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { UserService } from './user.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { fakeBackendProvider } from './helpers';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

//Admin
import { SidenavComponent } from './Admin/sidenav/sidenav.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { StarRatingComponent } from './Admin/star-rating/star-rating.component';
import { YearChartComponent } from './Admin/admin-chart/year-chart/year-chart.component';
import { MonthChartComponent } from './Admin/admin-chart/month-chart/month-chart.component';
import { DayChartComponent } from './Admin/admin-chart/day-chart/day-chart.component';
//Admin Ticket Listing
import { AdminTicketListComponent } from './Admin/admin-ticket-list/admin-ticket-list.component';
//Admin User Management
import { UsersComponent } from './Admin/users/users.component';
//Admin Notification
import { AdminNotificationComponent } from './Admin/admin-notification/admin-notification.component';
//Admin KnowledgeBase
import { KnowledgeBaseComponent } from './Admin/knowledge-base/knowledge-base.component';
import { SendReviewFormComponent } from './Admin/send-review-form/send-review-form.component';
//Admin Article
import { AddArticleComponent } from './Admin/add-article/add-article.component';
import { ViewArticleComponent } from './Admin/view-article/view-article.component';
import { EditArticleComponent } from './Admin/edit-article/edit-article.component';
import { ApproveArticleComponent } from './Admin/approve-article/approve-article.component';
import { AllArticleListComponent } from './Admin/all-article-list/all-article-list.component';
import { PendingApprovalArticleListComponent } from './Admin/pending-approval-article-list/pending-approval-article-list.component';
import { ArticleFeedbackComponent } from './Admin/article-feedback/article-feedback.component';

//Agent
import { AgentSidenavComponent } from './Agent/agent-sidenav/agent-sidenav.component';
import { AgentDashboardComponent } from './Agent/agent-dashboard/agent-dashboard.component';
import { AgentStarRatingComponent } from './Agent/agent-star-rating/agent-star-rating.component';
import { AgentYearChartComponent } from './Agent/agent-chart/agent-year-chart/agent-year-chart.component';
import { AgentMonthChartComponent } from './Agent/agent-chart/agent-month-chart/agent-month-chart.component';
import { AgentDayChartComponent } from './Agent/agent-chart/agent-day-chart/agent-day-chart.component';
//Agent Ticket Listing
import { AgentTicketListComponent } from './Agent/agent-ticket-list/agent-ticket-list.component';
//Agent Notification
import { AgentNotificationComponent } from './Agent/agent-notification/agent-notification.component';
//Agent Knowledge
import { AgentKnowledgeBaseComponent } from './Agent/agent-knowledge-base/agent-knowledge-base.component';
import { AgentSendReviewFormComponent } from './Agent/agent-send-review-form/agent-send-review-form.component';
//Agent Profile
import { AgentProfileComponent } from './Agent/agent-profile/agent-profile.component';
//Agent Article
import { AgentAddArticleComponent } from './Agent/agent-add-article/agent-add-article.component';
import { AgentViewArticleComponent } from './Agent/agent-view-article/agent-view-article.component';
import { AgentEditArticleComponent } from './Agent/agent-edit-article/agent-edit-article.component';
import { AgentAllArticleListComponent } from './Agent/agent-all-article-list/agent-all-article-list.component';
import { AgentArticleFeedbackComponent } from './Agent/agent-article-feedback/agent-article-feedback.component';

// Customer
import { CustomerSidenavComponent } from './Customer/customer-sidenav/customer-sidenav.component';
import { CustomerDashboardComponent } from './Customer/customer-dashboard/customer-dashboard.component';
// Customer Ticket Listing
import { CustomerTicketListComponent} from './Customer/customer-ticket-list/customer-ticket-list.component';
import { CustomerTicketComponent } from './Customer/customer-ticket/customer-ticket.component';
// Customer Notification
import { CustomerNotificationComponent } from './Customer/customer-notification/customer-notification.component';
// Customer Knowledge
import { CustomerKnowledgeBaseComponent } from './Customer/customer-knowledge-base/customer-knowledge-base.component';
// Customer Profile
import { CustomerProfileComponent } from './Customer/customer-profile/customer-profile.component';
import { CustomerEditProfileComponent } from './Customer/customer-edit-profile/customer-edit-profile.component';
import { CustomerEditPasswordComponent } from './Customer/customer-edit-password/customer-edit-password.component';
// Customer Article
import { CustomerViewArticleComponent } from './Customer/customer-view-article/customer-view-article.component';
import { CustomerFeedbackFormComponent } from './Customer/customer-feedback-form/customer-feedback-form.component';
import { ThreadComponent } from './thread/thread.component';
import { InputComponent } from './input/input.component';
import { AgentTicketComponent } from './Agent/agent-ticket/agent-ticket.component';
import { TicketRightAssignedComponent } from './ticket-right-assigned/ticket-right-assigned.component';
import { TicketRightResolvedComponent } from './ticket-right-resolved/ticket-right-resolved.component';
import { AdminTicketComponent } from './Admin/admin-ticket/admin-ticket.component';
import { NewTicketFormComponent } from './new-ticket-form/new-ticket-form.component';
import { CustomerTicketFeedbackComponent } from './Customer/cusotmer-ticket-feedback/customer-ticket-feedback.component';
import { provideFirebaseApp,getApp,initializeApp } from '@angular/fire/app';
import { FirestoreModule, provideFirestore,getFirestore } from '@angular/fire/firestore';
import { SharedService } from './shared.service';
import { DatePipe } from '@angular/common';
import { provideAuth,getAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC8CP3zNUsJ12djkYr9BinRHFwFMAYkJec",
  authDomain: "test-3bc28.firebaseapp.com",
  projectId: "test-3bc28",
  storageBucket: "test-3bc28.appspot.com",
  messagingSenderId: "2246409356",
  appId: "1:2246409356:web:3367dbf5384cca3ee6cfa9",
  measurementId: "G-QJW558C05E"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddArticleComponent,
    ViewArticleComponent,
    DashboardComponent,
    EditArticleComponent,
    KnowledgeBaseComponent,
    SidenavComponent,
    PendingApprovalArticleListComponent,
    ApproveArticleComponent,
    AllArticleListComponent,
    SendReviewFormComponent,
    ArticleFeedbackComponent,
    StarRatingComponent,
    MonthChartComponent,
    DayChartComponent,
    YearChartComponent,
    CustomerDashboardComponent,
    AgentDashboardComponent,
    AgentDayChartComponent,
    AgentMonthChartComponent,
    AgentYearChartComponent,
    AgentStarRatingComponent,
    AgentAddArticleComponent,
    AgentViewArticleComponent,
    AgentEditArticleComponent,
    AgentArticleFeedbackComponent,
    CustomerViewArticleComponent,
    CustomerFeedbackFormComponent,
    AgentSidenavComponent,
    AgentAllArticleListComponent,
    CustomerSidenavComponent,
    CustomerKnowledgeBaseComponent,
    AgentKnowledgeBaseComponent,
    AgentSendReviewFormComponent,
    CustomerTicketListComponent,
    AdminTicketListComponent,
    AgentTicketListComponent,
    AgentProfileComponent,
    CustomerProfileComponent,
    CustomerNotificationComponent,
    AgentNotificationComponent,
    AdminNotificationComponent,
    UsersComponent,
    CustomerEditPasswordComponent,
    CustomerEditProfileComponent,
    RegisterComponent,
    ThreadComponent,
    InputComponent,
    CustomerTicketComponent,
    AgentTicketComponent,
    TicketRightAssignedComponent,
    TicketRightResolvedComponent,
    AdminTicketComponent,
    NewTicketFormComponent,
    CustomerTicketFeedbackComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    RouterModule.forRoot([]),
    MatTabsModule,
    HttpClientModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  ],
  providers: [
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
