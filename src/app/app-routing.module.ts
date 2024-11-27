import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { MessagesComponent } from './messages/messages.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/auth-guard';

const routes: Routes = [

{path:'',component:HomeComponent},
{path:'members',component:MemberListComponent, canActivate:[AuthGuard]},
{path:'friends',component:FriendListComponent, canActivate:[AuthGuard]},
{path:'messages',component: MessagesComponent, canActivate:[AuthGuard]},
{path:'**',component:NotfoundComponent},
{path:'register',component:RegisterComponent},
{path:'home',component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
