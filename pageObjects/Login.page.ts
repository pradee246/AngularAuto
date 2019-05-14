import { $, ElementFinder, browser, element, by, WebElement } from 'protractor'
import { Controller } from '../commonFunctions/Controller';
import { HomePage } from './Home.page';




export class LoginPage  {
  public emailTextBox: ElementFinder
  public passwordTextBox: ElementFinder
  public loginBtn: ElementFinder
  public loginErrorTxt: ElementFinder

  constructor() {

    this.emailTextBox = $('#tr-login-username')
    // this.emailTextBox = $('input[tr-login="username"]')
    //this.emailTextBox=element(by.css('tr-login-username'))
    // this.emailTextBox=element(by.id('#tr-login-username'))
    this.passwordTextBox = $('#tr-login-password')
    this.loginBtn = $('#tr-email-form > div > div > div > input')
    this.loginErrorTxt = $('#loginErrorText')
  }

  async enterEmail(email: string) {
    await Controller.sendkeys_ud(this.emailTextBox, email);
  }


  async enterPassword(pwd: string) {
    await Controller.sendkeys_ud(this.passwordTextBox, pwd);
  }

  async clickLogin() {
    await Controller.click_ud(this.loginBtn);
  }

  async getLoginErrorText() {
    await browser.sleep(1500)
    return await this.loginErrorTxt.getAttribute('innerHTML')
  }

  async login(email: string, pwd: string) {
    await this.enterEmail(email)
    await this.enterPassword(pwd)
    await Controller.click_ud(this.loginBtn)

    await browser.sleep(10000)

  }





}
