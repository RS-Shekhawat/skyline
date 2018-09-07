import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ValidationService} from '../../../../services/validation.service';
import {ToastrService} from 'ngx-toastr';
import {CommonService} from '../../../../services/common.service';
import {ValidationMessages} from '../../../../models/validation-messages.model';

@Component({
  selector: 'app-admin-change-password',
  templateUrl: './change-password.component.html',
  styles: []
})
export class ChangePasswordComponent implements OnInit {

  constructor(private toastr: ToastrService,
              private fb: FormBuilder,
              public validationService: ValidationService,
              private commonService: CommonService, ) {
  }

  public submitAttempted = false;

  public form = this.fb.group({
    old_password: ['', Validators.required],
    new_password: ['', [Validators.required, Validators.minLength(8)]],
    confirm_password: ['', [Validators.required, Validators.minLength(8)]],
  });

  private validationMessages: ValidationMessages = {
    old_password: {
      required: 'Please enter current password'
    },
    new_password: {
      required: 'Please enter new password'
    },
    confirm_password: {
      required: 'Please repeat new password'
    }
  };

  ngOnInit() {
  }

  onSubmit() {

    this.submitAttempted = true;
    if (!this.form.valid) {
      this.validationService.errorNotifications(this.form, this.validationMessages);
      return false;
    }

    this.commonService.post<any>('/admin/change_password', this.form.value).subscribe(response => {
      if (response.type === true) {
        if (response.message !== '') {
          this.toastr.success(response.message);
        }

        this.submitAttempted = false;
        this.form.reset();

      }
    });

  }

}
