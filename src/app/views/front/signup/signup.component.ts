import {Component, OnInit, ViewChild} from '@angular/core';
import {setTheme} from 'ngx-bootstrap/utils';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'user-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit {

  constructor() {
    setTheme('bs4');
  }

  ngOnInit() {
  }

}
