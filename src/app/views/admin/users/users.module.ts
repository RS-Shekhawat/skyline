import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from './users.component';
import {UtilModule} from '../../util.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    UtilModule,
    ReactiveFormsModule
  ],
  declarations: [UsersComponent, UserDetailsComponent, AddUserComponent],
  exports: []
})
export class UsersModule {
}
