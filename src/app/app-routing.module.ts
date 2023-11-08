import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { EventAddComponent } from './event-add/event-add.component';
import { UserAddComponent } from './user-add/user-add.component';
import { IssueComponent } from './issue/issue.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { IssueAddComponent } from './issue-add/issue-add.component';


//Declaración de rutas para añadir navegación entre componentes
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'events', component: EventsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'issues', component: IssueComponent },
  { path: 'detailEvent/:id', component: EventDetailComponent },
  { path: 'detailUser/:id', component: UserDetailComponent },
  { path: 'detailIssue/:id', component: IssueDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'eventAdd', component: EventAddComponent },
  { path: 'userAdd', component: UserAddComponent },
  { path: 'issueAdd', component: IssueAddComponent },
  



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
