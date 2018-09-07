import {Component, OnInit, ViewChild} from '@angular/core';
import {setTheme} from 'ngx-bootstrap/utils';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor() {
    setTheme('bs4');
  }

  ngOnInit() {
  }

}
