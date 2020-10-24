import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home-page/home/home.component';
import { LoginComponent } from './pages/login-page/login/login.component';
import { QuestComponent } from './pages/quest-page/quest/quest.component';
import { RewardComponent } from './pages/reward-page/reward/reward.component';
import { UserComponent } from './pages/user-page/user/user.component';
import { AuthGuardService as AuthGuard } from './services/auth/auth-guard.service';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'task',
    component:QuestComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'user',
    component:UserComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'reward',
    component:RewardComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'**',
    redirectTo:'/home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
