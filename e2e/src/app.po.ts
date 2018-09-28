import { browser, by, element } from 'protractor';
import {TalkSubmissionPage} from './talk-submission.po';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  navigateToTalkSubmission(): TalkSubmissionPage {
    browser.get('/talk-submission');
    return new TalkSubmissionPage();
  }
}
