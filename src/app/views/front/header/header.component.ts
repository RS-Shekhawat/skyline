import {Component, OnInit, ViewChild} from '@angular/core';
import {setTheme} from 'ngx-bootstrap/utils';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-front-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;  

  constructor() {
    setTheme('bs4');
  }

  ngOnInit() {
  }

}
