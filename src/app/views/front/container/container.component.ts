import {Component, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  // styleUrls: [
  //   '../../../../assets/css/bootstrap.min.css',
  //   '../../../../assets/css/animate.css',
  //   '../../../../assets/css/material-design-iconic-font.min.css',
  //   '../../../../assets/css/fa-brands.min.css',
  //   '../../../../assets/css/fa-regular.min.css',
  //   '../../../../assets/css/fa-solid.min.css',
  //   '../../../../assets/css/fontawesome.min.css',
  //   '../../../../assets/css/ionicons.css',

  //   '../../../../assets/css/hover.css',
  //   '../../../../assets/css/style.css',
  //   '../../../../assets/css/side-menu.css',
  //   '../../../../assets/css/responsive.css',
  // ], 
  styleUrls:[
    '../../../../assets/css/bootstrap.min.css',
    '../../../../assets/css/material-design-iconic-font.min.css',
    '../../../../assets/css/font-awesome.min.css',
    '../../../../assets/css/custom.css',
  ],

  encapsulation: ViewEncapsulation.None,
})
export class ContainerComponent implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'web-front');
  }

  ngOnInit() {
  }

}
