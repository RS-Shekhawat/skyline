import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../services/user.service';
import {User} from '../../../../models/user.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {FormBuilder, Validators} from '@angular/forms';
import {ValidationService} from '../../../../services/validation.service';
import {CustomValidators} from '../../../../validators/CustomValidators';

@Component({
  selector: 'app-admin-user-details',
  templateUrl: './user-details.component.html',
  styles: []
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private toastr: ToastrService,
              private fb: FormBuilder,
              public validationService: ValidationService) {
  }

  public mode = 'view';
  public user: User;
  private routeId: number;
  private message404 = 'User not found';
  public submitAttempted = false;

  public form = this.fb.group({
    id: ['', Validators.required],
    role_id: ['', Validators.required],
    user_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, CustomValidators.phone]],
    employer_id: [null]
  });

  ngOnInit() {
    this.routeId = +this.route.snapshot.params['id'];
    if (!this.routeId) {
      this.toastr.error(this.message404);
      this.router.navigate(['/admin/users']);
    }

    this.getUser();

  }

  setMode(mode: string) {
    this.mode = mode;
  }

  getUser() {
    this.userService.getUser(this.routeId).subscribe(response => {
      if (response.type === true) {
        this.user = response.data;
        this.form.patchValue(this.user);
      } else {
        this.router.navigate(['/admin/users']);
      }
    }, () => {
      this.router.navigate(['/admin/users']);
    });
  }

  onSubmit() {

    this.submitAttempted = true;
    if (!this.form.valid) { return false; }

    this.userService.saveUser(this.form.value).subscribe(response => {
        if (response.type === true) {
          if (response.message !== '') {
            this.toastr.success(response.message);
          }

          this.user = {...this.user, ...this.form.value};
          this.mode = 'view';
        }
      }
    );

  }

}
