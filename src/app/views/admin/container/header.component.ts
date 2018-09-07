import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  @Input() public pageTitle = '';

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  logOut() {
    this.auth.logout();
  }

}
