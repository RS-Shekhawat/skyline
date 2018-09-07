import {Injectable} from '@angular/core';
import {AbstractControl, FormControl} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {FormGroup} from '@angular/forms';
import {ValidationMessages} from '../models/validation-messages.model';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor(private toastr: ToastrService) {
  }

  public classes(submitAttempted: boolean, control: AbstractControl) {
    return {
      'has-danger': (submitAttempted || control.dirty) && !control.valid,
      'is-filled is-focused': control.value !== '',
    };
  }

  public errorNotifications(form: FormGroup, validationMessages: ValidationMessages) {
    for (const controlKey in form.controls) {
      if (form.controls.hasOwnProperty(controlKey)) {
        const control = form.controls[controlKey];
        if (control.errors && control.hasOwnProperty('errors')) {
          const errors = control.errors;
          for (const errorKey in errors) {
            if (errors.hasOwnProperty(errorKey)) {
              if (validationMessages.hasOwnProperty(controlKey) && validationMessages[controlKey].hasOwnProperty(errorKey)) {
                this.toastr.error(validationMessages[controlKey][errorKey]);
              }
            }
          }
        }
      }
    }
  }

}
