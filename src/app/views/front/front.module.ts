import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FrontRoutingModule} from './front-routing.module';
import {HeaderComponent} from './header/header.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

import { ContainerComponent } from './container/container.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FrontRoutingModule,
    ModalModule.forRoot(),
    NgbModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    LoginComponent,
    SignupComponent,
    ContainerComponent
  ]
})
export class FrontModule {
}
