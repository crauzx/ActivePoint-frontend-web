import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'
import { MatTableModule } from '@angular/material/table'
import { MatDialogModule } from '@angular/material/dialog'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatSelectModule } from '@angular/material/select'
import { MatNativeDateModule } from '@angular/material/core'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginComponent } from './pages/login-page/login/login.component'
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component'
import { HomeComponent } from './pages/home-page/home/home.component'
import { QuestComponent } from './pages/quest-page/quest/quest.component'
import { UserComponent } from './pages/user-page/user/user.component'
import { RewardComponent } from './pages/reward-page/reward/reward.component'
import { ViewUserComponent } from './components/views/view-user/view-user.component'
import { ViewTaskComponent } from './components/views/view-task/view-task.component'
import { InsertTaskDialogComponent } from './components/insert-dialogs/insert-task-dialog/insert-task-dialog.component';
import { ViewRewardsComponent } from './components/views/view-rewards/view-rewards.component';
import { UpdateTaskDialogComponent } from './components/update-dialogs/update-task-dialog/update-task-dialog.component';
import { ViewTaskDetailDialogComponent } from './components/views/view-dialogs/view-task-detail-dialog/view-task-detail-dialog.component';
import { DeleteTaskDialogComponent } from './components/delete-dialogs/delete-task-dialog/delete-task-dialog.component';
import { InsertRewardDialogComponent } from './components/insert-dialogs/insert-reward-dialog/insert-reward-dialog.component';
import { UpdateRewardDialogComponent } from './components/update-dialogs/update-reward-dialog/update-reward-dialog.component';
import { DeleteRewardDialogComponent } from './components/delete-dialogs/delete-reward-dialog/delete-reward-dialog.component';
import { ViewRewardDetailDialogComponent } from './components/views/view-dialogs/view-reward-detail-dialog/view-reward-detail-dialog.component';
import { ShareTaskComponent } from './pages/share-task-page/share-task/share-task.component';
import { ViewShareTaskComponent } from './components/views/view-share-task/view-share-task.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponentComponent,
    HomeComponent,
    QuestComponent,
    UserComponent,
    RewardComponent,
    ViewUserComponent,
    ViewTaskComponent,
    InsertTaskDialogComponent,
    ViewRewardsComponent,
    UpdateTaskDialogComponent,
    ViewTaskDetailDialogComponent,
    DeleteTaskDialogComponent,
    InsertRewardDialogComponent,
    UpdateRewardDialogComponent,
    DeleteRewardDialogComponent,
    ViewRewardDetailDialogComponent,
    ShareTaskComponent,
    ViewShareTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatSelectModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
