import {Component, OnInit, ViewChild} from '@angular/core';
import {setTheme} from 'ngx-bootstrap/utils';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-front-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() {
    // setTheme('bs4');
  }

  ngOnInit() {
  }

}
