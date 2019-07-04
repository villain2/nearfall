import { $, ElementFinder } from 'protractor';

export default class LoginPagePo {
    //#region elements
    googleButton: ElementFinder = $('button.btn-google');
    facebookButton: ElementFinder = $('button.btn-facebook');
    twitterButton: ElementFinder = $('button.btn-twitter');
    emailButton: ElementFinder = $('.emailButton');

    // form fields
    emailFormField: ElementFinder = $('input.mat-input-element');
    emailFormSubmitBtn: ElementFinder = $('button.btn.btn-primary#submit');

}
