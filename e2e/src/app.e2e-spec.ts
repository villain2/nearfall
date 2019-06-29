import { AppPage } from './app.po';
import {browser, ExpectedConditions} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to angularapp!');
  });

  it('Should display welcome to angularapp', (done: DoneFn) => {
    return browser.waitForAngularEnabled(true)
      .then(() => browser.sleep(2000))
      .then(() => expect(page.getParagraphText()).toEqual('Welcome to angularapp!'))
      .then(done)
      .catch((err: Error) => done.fail(err));
  });
});
