import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontPanelRoutingModule } from './front-panel-routing.module';
import { ContainerComponent } from './container/container.component';
import { SidebarComponent } from './container/sidebar.component';
import { HeaderComponent } from './container/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FrontPanelRoutingModule,
    NgbModule,
  ],
  declarations: [ContainerComponent, SidebarComponent, HeaderComponent]
})
export class FrontPanelModule { }
