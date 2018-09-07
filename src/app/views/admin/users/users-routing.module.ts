import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './users.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {AddUserComponent} from './add-user/add-user.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'transport',
  },
  {
    path: 'transport',
    pathMatch: 'full',
    component: UsersComponent,
    data: {
      title: 'Transporters'
    }
  },
  {
    path: 'charter',
    pathMatch: 'full',
    component: UsersComponent,
    data: {
      title: 'Charters'
    }
  },
  {
    path: 'add',
    pathMatch: 'full',
    component: AddUserComponent,
    data: {
      title: 'Charters'
    }
  },
  {
    path: ':id',
    pathMatch: 'full',
    component: UserDetailsComponent,
    data: {
      title: 'User Details'
    }
  }
  /*{
    path: ':type',
    pathMatch: 'full',
    children: [
      {
        pathMatch: 'full',
        path: 'transport',
        component: UsersComponent,
      },
      {
        pathMatch: 'full',
        path: 'charter',
        component: UsersComponent,
      }
    ],
    data: {
      title: 'Users'
    }
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
