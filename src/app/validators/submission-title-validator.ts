import {AbstractControl} from '@angular/forms';

export function submissionTitleValidator(control: AbstractControl): any {
  if (control.value === '') {
    return {titleTooShort: true};
  }
  if (control.value.includes('blockchain')) {
    return {blockchain: true};
  }
  return null;
}
