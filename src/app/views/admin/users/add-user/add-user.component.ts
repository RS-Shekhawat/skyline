import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../../../../services/user.service';
import {ValidationService} from '../../../../services/validation.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Role} from '../../../../models/role.model';
import {CustomValidators} from '../../../../validators/CustomValidators';

@Component({
  selector: 'app-admin-add-user',
  templateUrl: './add-user.component.html',
  styles: []
})
export class AddUserComponent implements OnInit {

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private toastr: ToastrService,
              private fb: FormBuilder,
              public validationService: ValidationService) { }

  public submitAttempted = false;

  public form = this.fb.group({
    role_id: [Role.charter, Validators.required],
    user_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, CustomValidators.phone]],
    employer_id: [null]
  });

  ngOnInit() {
  }

  onSubmit() {

    this.submitAttempted = true;
    if (!this.form.valid) { return false; }

    this.userService.saveUser(this.form.value).subscribe(response => {
        if (response.type === true) {
          if (response.message !== '') {
            this.toastr.success(response.message);
          }
          if (response.data.id) {
            this.router.navigate([`/admin/users/${response.data.id}`]);
          }
        }
      }
    );

  }

}
