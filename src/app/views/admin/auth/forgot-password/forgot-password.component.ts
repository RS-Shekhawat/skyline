import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../../../../services/user.service';
import {AuthService} from '../../../../services/auth.service';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {ValidationService} from '../../../../services/validation.service';
import {CommonService} from '../../../../services/common.service';

@Component({
  selector: 'app-admin-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: [
    '../../../../../assets/admin/scss/custom.scss',
    '../../../../../assets/admin/scss/material-dashboard.scss',
    '../../../../../assets/admin/demo/demo.css',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ForgotPasswordComponent implements OnInit {

  public submitAttempted: 'email' | 'otp' | 'password' = null;

  public mode: 'enter-email' | 'enter-otp' | 'enter-password' = 'enter-email';

  public enterEmailForm = this.fb.group({
    email: this.fb.control('', [Validators.required, Validators.email]),
  });

  public enterOtpForm = this.fb.group({
    email: this.fb.control('', [Validators.required, Validators.email]),
    otp: this.fb.control('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
  });

  public enterPasswordForm = this.fb.group({
    email: this.fb.control('', [Validators.required]),
    new_password: this.fb.control('', [Validators.required, Validators.minLength(8)]),
    confirm_password: this.fb.control('', [Validators.required, Validators.minLength(8)]),
  });

  changeMode(mode: 'enter-email' | 'enter-otp' | 'enter-password') {
    this.mode = mode;
  }

  onSubmitEmail() {
    this.submitAttempted = 'email';
    if (!this.enterEmailForm.valid) {return; }

    this.commonService.post<{}>('/admin/forgotPassword', this.enterEmailForm.value).subscribe(response => {
      if (response.type === true) {
        if (response.message) {this.toastr.success(response.message); }
        this.enterOtpForm.patchValue(this.enterEmailForm.value);
        this.changeMode('enter-otp');
      }
    });
  }

  onSubmitOtp() {
    this.submitAttempted = 'otp';
    if (!this.enterOtpForm.valid) {return; }

    this.commonService.post<any>('/admin/verifyOtp', this.enterOtpForm.value).subscribe(response => {
      if (response.type === true) {
        if (response.message) {this.toastr.success(response.message); }
        this.enterPasswordForm.patchValue(this.enterOtpForm.value);
        this.changeMode('enter-password');
      }
    });
  }

  onSubmitPassword() {
    this.submitAttempted = 'password';
    if (!this.enterPasswordForm.valid) {return; }

    this.commonService.post<any>('/admin/resetPassword', this.enterPasswordForm.value).subscribe(response => {
      if (response.type === true) {
        if (response.message) {this.toastr.success(response.message); }
        this.router.navigate(['/admin/auth/login']);
      }
    });

  }

  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private userService: UserService,
              private router: Router,
              private route: ActivatedRoute,
              private toastr: ToastrService,
              public vs: ValidationService,
              private commonService: CommonService) {
  }

  ngOnInit() {
    let {useremail, otp} = this.route.snapshot.queryParams;
    if (!useremail || !otp) {return; }

    const email = window.atob(useremail);
    otp = window.atob(otp);
    this.enterEmailForm.patchValue({email});
    this.enterOtpForm.patchValue({otp, email});
    this.changeMode('enter-otp');
    this.onSubmitOtp();
  }

}
