import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {ContainerComponent} from './container/container.component';
import {SidebarComponent} from './container/sidebar.component';
import {HeaderComponent} from './container/header.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UtilModule} from '../util.module';
import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    UtilModule,
    BsDropdownModule.forRoot(),
  ],
  declarations: [ContainerComponent, SidebarComponent, HeaderComponent, DashboardComponent],
  exports: [],
  providers: []
})
export class AdminModule {
}
