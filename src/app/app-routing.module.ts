import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Login
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { ViewArticleComponent } from './Admin/view-article/view-article.component';
import { EditArticleComponent } from './Admin/edit-article/edit-article.component';
import { AddArticleComponent } from './Admin/add-article/add-article.component';
import { PendingApprovalArticleListComponent } from './Admin/pending-approval-article-list/pending-approval-article-list.component';
import { ApproveArticleComponent } from './Admin/approve-article/approve-article.component';
import { KnowledgeBaseComponent } from './Admin/knowledge-base/knowledge-base.component';
import { AllArticleListComponent } from './Admin/all-article-list/all-article-list.component';
import { ArticleFeedbackComponent } from './Admin/article-feedback/article-feedback.component';
import { AgentDashboardComponent } from './Agent/agent-dashboard/agent-dashboard.component';
import { AgentAddArticleComponent } from './Agent/agent-add-article/agent-add-article.component';
import { AgentArticleFeedbackComponent } from './Agent/agent-article-feedback/agent-article-feedback.component';
import { AgentEditArticleComponent } from './Agent/agent-edit-article/agent-edit-article.component';
import { AgentViewArticleComponent } from './Agent/agent-view-article/agent-view-article.component';
import { CustomerViewArticleComponent } from './Customer/customer-view-article/customer-view-article.component';
import { AgentAllArticleListComponent } from './Agent/agent-all-article-list/agent-all-article-list.component';
import { CustomerKnowledgeBaseComponent } from './Customer/customer-knowledge-base/customer-knowledge-base.component';
import { CustomerDashboardComponent } from './Customer/customer-dashboard/customer-dashboard.component';
import { AgentKnowledgeBaseComponent } from './Agent/agent-knowledge-base/agent-knowledge-base.component';
import { CustomerTicketListComponent} from './Customer/customer-ticket-list/customer-ticket-list.component';
import { AdminTicketListComponent } from './Admin/admin-ticket-list/admin-ticket-list.component';
import { AgentTicketListComponent } from './Agent/agent-ticket-list/agent-ticket-list.component';
import { AgentProfileComponent } from './Agent/agent-profile/agent-profile.component';
import { CustomerProfileComponent } from './Customer/customer-profile/customer-profile.component';
import { CustomerNotificationComponent } from './Customer/customer-notification/customer-notification.component';
import { AgentNotificationComponent } from './Agent/agent-notification/agent-notification.component';
import { AdminNotificationComponent } from './Admin/admin-notification/admin-notification.component';
import { CustomerEditPasswordComponent } from './Customer/customer-edit-password/customer-edit-password.component';
import { CustomerEditProfileComponent } from './Customer/customer-edit-profile/customer-edit-profile.component';
import { CustomerTicketComponent } from './Customer/customer-ticket/customer-ticket.component';
import { AgentTicketComponent } from './Agent/agent-ticket/agent-ticket.component';
import { AdminTicketComponent } from './Admin/admin-ticket/admin-ticket.component';
import { NewTicketFormComponent } from './new-ticket-form/new-ticket-form.component';
const usersModule = () => import('./Admin/users.module').then(x => x.UsersModule);

const routes: Routes = [
  //Login
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  //Admin
  { path: 'admin-dashboard', component: DashboardComponent },
  { path: 'view-article', component: ViewArticleComponent },
  { path: 'edit-article', component: EditArticleComponent },
  { path: 'add-article', component: AddArticleComponent},
  { path: 'pending-approval-article-list', component: PendingApprovalArticleListComponent},
  { path: 'approve-article', component: ApproveArticleComponent},
  { path: 'knowledge-base', component: KnowledgeBaseComponent},
  { path: 'all-article-list', component: AllArticleListComponent},
  { path: 'article-feedback', component: ArticleFeedbackComponent},
  { path: 'admin-ticket-list', component: AdminTicketListComponent},
  { path: 'admin-notification', component: AdminNotificationComponent},
  { path: 'admin-ticket' , component: AdminTicketComponent},
  { path: 'user-list', loadChildren: usersModule },
  
  //Agent
  { path: 'agent-dashboard',component:AgentDashboardComponent},
  { path: 'agent-add-article',component:AgentAddArticleComponent},
  { path: 'agent-edit-article', component: AgentEditArticleComponent },
  { path: 'agent-view-article', component: AgentViewArticleComponent },
  { path: 'agent-article-feedback', component: AgentArticleFeedbackComponent},
  { path: 'agent-all-article-list', component: AgentAllArticleListComponent},
  { path: 'agent-knowledge-base', component: AgentKnowledgeBaseComponent},
  { path: 'agent-ticket-list', component: AgentTicketListComponent},
  { path: 'agent-profile', component: AgentProfileComponent},
  { path: 'agent-notification', component: AgentNotificationComponent},
  { path: 'agent-ticket', component: AgentTicketComponent},
  //Customer
  { path: 'customer-dashboard',component:CustomerDashboardComponent},
  { path: 'customer-view-article', component: CustomerViewArticleComponent },
  { path: 'customer-knowledge-base', component: CustomerKnowledgeBaseComponent},
  { path: 'customer-ticket-list', component: CustomerTicketListComponent},
  { path: 'customer-profile', component: CustomerProfileComponent},
  { path: 'customer-notification', component: CustomerNotificationComponent},
  { path: 'customer-edit-password', component: CustomerEditPasswordComponent },
  { path: 'customer-edit-profile', component: CustomerEditProfileComponent },
  { path: 'customer-ticket', component: CustomerTicketComponent},
  { path: 'new-ticket-form', component: NewTicketFormComponent},
  { path: 'agent-ticket/:tickets.id/:loggedInUser', component: AgentTicketComponent },
  { path: 'customer-ticket/:tickets.id/:loggedInUser', component: CustomerTicketComponent },
  { path: 'admin-ticket/:tickets.id', component: AdminTicketComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
