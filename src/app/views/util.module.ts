import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaginationComponent} from './admin/common/pagination/pagination.component';
import { StatusComponent } from './admin/common/status/status.component';
import { RoleLabelPipe } from '../pipes/role-label.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PaginationComponent, StatusComponent, RoleLabelPipe, ],
  exports: [PaginationComponent, StatusComponent, RoleLabelPipe, ]
})
export class UtilModule { }
