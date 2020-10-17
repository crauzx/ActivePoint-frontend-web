import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home-page/home/home.component';
import { LoginComponent } from './pages/login-page/login/login.component';
import { QuestComponent } from './pages/quest-page/quest/quest.component';
import { RewardComponent } from './pages/reward-page/reward/reward.component';
import { UserComponent } from './pages/user-page/user/user.component';

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
    component:HomeComponent
  },
  {
    path:'quest',
    component:QuestComponent
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'reward',
    component:RewardComponent
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
