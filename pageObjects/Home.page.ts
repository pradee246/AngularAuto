import { $, ElementFinder, browser, element, by, WebElement } from 'protractor'
import { Controller } from '../commonFunctions/Controller';



export class HomePage {
  public welcome_label:ElementFinder
  public patentSrerchLink: ElementFinder
  // public emailTextBox: WebElement


  constructor() {
    this.welcome_label = element(by.xpath("//li[@class='menu-item']//span/span[contains(.,'Welcome')]"));
    this.patentSrerchLink = element(by.xpath("//a[@class='card-link but-link']//div//h4[text()='Patent Search']"));

  }

  async clickPatentSearch() {
    await Controller.click_ud(this.patentSrerchLink);
  }

}
