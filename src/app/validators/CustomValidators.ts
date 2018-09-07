import { AbstractControl } from '@angular/forms';

function image(control: AbstractControl) {
  if (control.value && !control.value.startsWith('data:image/')) {
    return {image: true};
  }
  return null;
}

function pdf(control: AbstractControl) {
  if (control.value && !control.value.startsWith('data:application/pdf')) {
    return {pdf: true};
  }
  return null;
}

function phone(contol: AbstractControl) {
  if (contol.value && !contol.value.match(/^(\+\d{1,2})?(\d{10})$/)) {
    return {phone: true};
  }
  return null;
}

export const CustomValidators = {
  image, pdf, phone
};
