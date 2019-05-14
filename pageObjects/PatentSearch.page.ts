import { $, ElementFinder, browser, element, by, WebElement } from 'protractor'
import { Controller } from '../commonFunctions/Controller';



export class PatentSearchPage {
  public menu_Search:ElementFinder
  public subMenu_PatentSearch: ElementFinder
  public subMenu_LiteratureSearch: ElementFinder
  public subMenu_NativeJapaneseSearch: ElementFinder
  // public emailTextBox: WebElement


  constructor() {
    this.menu_Search = element(by.xpath("//li[@class='main-nav-item ng-star-inserted']//span[text()='Search']"));
    this.subMenu_PatentSearch = element(by.xpath("//div[@class='mat-menu-content']//button[text()='Patent search']"));
    this.subMenu_LiteratureSearch = element(by.xpath("//div[@class='mat-menu-content']//button[text()='Literature search']"));
    this.subMenu_NativeJapaneseSearch = element(by.xpath("//div[@class='mat-menu-content']//button[text()='Native Japanese search']"));

  }

  async clickSearchMenu() {
    await Controller.click_ud(this.menu_Search);
  }



}
