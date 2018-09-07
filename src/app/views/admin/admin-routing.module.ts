import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContainerComponent} from './container/container.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuard} from '../../guards/auth-guard.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: '../admin/auth/auth.module#AuthModule'
  },
  {
    path: '',
    component: ContainerComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: {
          title: 'Dashboard'
        }
      }, {
        path: 'users',
        loadChildren: '../admin/users/users.module#UsersModule'
      }, {
        path: 'profile',
        loadChildren: '../admin/profile/profile.module#ProfileModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
