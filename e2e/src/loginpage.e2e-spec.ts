import {browser, ExpectedConditions} from 'protractor';
import LoginPagePo from './loginpage.po';

let LoginPage: LoginPagePo;

describe('Logging In', () => {
    beforeEach((done: DoneFn) => {
        LoginPage = new LoginPagePo();

        return browser.sleep(2000)
            .then(() => browser.driver.manage().window().setSize(1024, 768))
            .then(done)
            .catch((err: Error) => done.fail(err));
    });

    it('Should click on google login button', (done: DoneFn) => {
        return browser.get('/')
            .then(() => LoginPage.googleButton.click())
            .then( () => browser.sleep(2000))
            .then(() => browser.getAllWindowHandles().then((handles) => {
                browser.driver.switchTo().window(handles[1]);
                browser.driver.close();
                browser.driver.switchTo().window(handles[0]);
            }))
            .then( () => browser.sleep(2000))
            .then(done)
            .catch((err: Error) => done.fail(err));
    });

    it('Should click on twitter login button', (done: DoneFn) => {
        return browser.get('/')
            .then(() => LoginPage.twitterButton.click())
            .then( () => browser.sleep(2000))
            .then(() => browser.getAllWindowHandles().then((handles) => {
                browser.driver.switchTo().window(handles[1]);
                browser.driver.close();
                browser.driver.switchTo().window(handles[0]);
            }))
            .then( () => browser.sleep(2000))
            .then(done)
            .catch((err: Error) => done.fail(err));
    });

    it('Should click on email login button', (done: DoneFn) => {
        return browser.get('/')
            .then(() => browser.waitForAngularEnabled())
            .then(() => LoginPage.emailButton.click())
            .then(() => LoginPage.emailFormField.isDisplayed())
            .then(() => LoginPage.emailFormField.sendKeys('cartondonofrio@gmail.com'))
            .then(() => LoginPage.emailFormSubmitBtn.isDisplayed())
            .then( () => browser.sleep(2000))
            .then(done)
            .catch((err: Error) => done.fail(err));
    });
});
