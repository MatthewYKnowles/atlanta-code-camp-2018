import { AppPage } from './app.po';
import {TalkSubmissionPage} from './talk-submission.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to atlanta-code-camp-demo-two!');
  });

  it('should submit a talk for Code Camp 2019', () => {
    const talkSubmissionPage: TalkSubmissionPage = page.navigateToTalkSubmission();
    talkSubmissionPage.setFirstName('Matthew');
    talkSubmissionPage.setLastName('Knowles');
    talkSubmissionPage.setEmail('Matthew@GreaterSum.com');
    talkSubmissionPage.setSubmissionTitle('Test Drive An Angular App');
    talkSubmissionPage.setAbstract('Using UI, Integration, and Unit Tests');
    talkSubmissionPage.submitTalk();
    expect(talkSubmissionPage.getSubmissionSuccessMessage().getText())
      .toEqual('Matthew, thanks for submitting your talk on Test Drive An Angular App.');
  });

  it('should not allow a talk on blockchain', () => {
    const talkSubmissionPage: TalkSubmissionPage = page.navigateToTalkSubmission();
    talkSubmissionPage.setFirstName('Matthew');
    talkSubmissionPage.setLastName('Knowles');
    talkSubmissionPage.setEmail('Matthew@GreaterSum.com');
    talkSubmissionPage.setSubmissionTitle('How to start a company using blockchain');
    talkSubmissionPage.setAbstract('Who cares if it adds value, it will be built with blockchain');
    talkSubmissionPage.submitTalk();
    expect(talkSubmissionPage.getBlockchainErrorMessage().getText())
      .toEqual('Sorry we are not accepting talks on blockchain this year');
  });
});
