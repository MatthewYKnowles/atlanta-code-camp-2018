import {AbstractControl} from '@angular/forms';
import {submissionTitleValidator} from './submission-title-validator';

describe('Submission Title Validator', () => {
  it('should reject titles that do not have a character', () => {
    const control = {value: ''};
    expect(submissionTitleValidator(control as AbstractControl)).toEqual({titleTooShort: true});
  });
  it('should accept titles that have a character', () => {
    const control = {value: 'a'};
    expect(submissionTitleValidator(control as AbstractControl)).toEqual(null);
  });
  it('should reject titles that contain blockchain', () => {
    const control = {value: 'How to blockchain everything'};
    expect(submissionTitleValidator(control as AbstractControl)).toEqual({blockchain: true});
  });
});
