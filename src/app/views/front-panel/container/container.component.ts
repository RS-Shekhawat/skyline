import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-panel-container',
  templateUrl: './container.component.html',
  styleUrls:[
    '../../../../assets/css/bootstrap.min.css',
    '../../../../assets/css/material-design-iconic-font.min.css',
    '../../../../assets/css/font-awesome.min.css',
    '../../../../assets/css/custom.css',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
