import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../../../services/auth.service';
import {UserService} from '../../../../services/user.service';
import {Router} from '@angular/router';
import {Login} from '../../../../models/login.model';
import {ToastrService} from 'ngx-toastr';
import {Role} from '../../../../models/role.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    '../../../../../assets/admin/scss/custom.scss',
    '../../../../../assets/admin/scss/material-dashboard.scss',
    '../../../../../assets/admin/demo/demo.css',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {

  public submitAttempted = false;

  public form = this.fb.group({
    role_id: [Role.superAdmin],
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [Validators.required]),
  });

  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private userService: UserService,
              private router: Router,
              private toastr: ToastrService
              ) {
  }

  ngOnInit() {
  }

  public onSubmit() {

    this.submitAttempted = true;
    if (!this.form.valid) {
      return;
    }

    this.auth.authenticate(new Login(this.form.value)).subscribe((response) => {
      if (response.type === true) {
        const user = response.data;
        this.auth.setToken(user.sid);

        delete user.sid;

        this.userService.setCurrentUser(user);
        this.router.navigate(['/admin']);
      }
    });
  }

}
