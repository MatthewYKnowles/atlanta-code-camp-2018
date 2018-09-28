import {by, element} from 'protractor';

export class TalkSubmissionPage {

  setFirstName(firstName: string) {
    element(by.id('firstName')).sendKeys(firstName);
  }
  setLastName(lastName: string) {
    element(by.id('lastName')).sendKeys(lastName);
  }
  setEmail(email: string) {
    element(by.id('email')).sendKeys(email);
  }
  setSubmissionTitle(submissionTitle: string) {
    element(by.id('submission-title')).sendKeys(submissionTitle);
  }
  setAbstract(abstract: string) {
    element(by.id('abstract')).sendKeys(abstract);
  }
  submitTalk() {
    element(by.id('submit')).click();
  }
  getSubmissionSuccessMessage() {
    return element(by.id('submission-success-message'));
  }

  getBlockchainErrorMessage() {
    return element(by.id('blockchain-error-message'));
  }
}
