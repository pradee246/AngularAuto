import { browser, protractor, WebElement, Key, ElementFinder, ElementArrayFinder } from 'protractor'


const waitTime = 10000

export class Controller  {
  constructor() {
  }



  static async dropdown(element: ElementFinder) {
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.elementToBeClickable(element), waitTime);
    element.click()
  }

  async getTitle() {
    return await browser.getTitle()
  }

  async getAllWindowHandles() {
    return await browser.getAllWindowHandles()
  }

  static async switchToWindow(mainWindow: string, allWindowHandles: string[]) {
    // const handles: any = await this.getAllWindowHandles()
    // return await browser.switchTo().window(handles[index])
    for (let handles of allWindowHandles) {
      if (handles != mainWindow) {
        await browser.switchTo().window(handles);
        return await browser.getCurrentUrl()
      }
    }
  }

  async switchToDefaultContent() {
    return await browser.switchTo().defaultContent()
  }

  static async currentURL() {
    return await browser.getCurrentUrl()
  }

  async switchToFrame(element: WebElement) {
    return await browser.switchTo().frame(element)
  }
  async doubleclick(element: WebElement) {
    await browser.actions()
      .doubleClick(element)
      .perform()
  }




  static async click(element: ElementFinder) {
    var EC = await protractor.ExpectedConditions;
    await
      await browser.wait(EC.elementToBeClickable(await element), 2000);
    await element.click()
  }

  static async clickWebelement(element: WebElement) {
    try {
      browser.sleep(1000)
      let elementIsClickable: boolean = await element.isEnabled()
      // while (elementIsClickable)
      if (elementIsClickable) {
        await element.click()
      }
    } catch (e) {
      console.error('elment not clicked' + e.toString)
    }
  }

  // async getElementWebElement() {
  //   return await element
  // }

  // async setElement(element: WebElement) {
  //   element = await element
  // }

  async pressKeyDown(element: WebElement) {
    await element.sendKeys(Key.DOWN)
  }

  async pressKeyEnter(element: WebElement) {
    await element.sendKeys(Key.ENTER)
  }

  static async pressKeyESC() {
    await browser.actions().sendKeys(protractor.Key.ESCAPE).perform()
  }

  async pressKeyUp(element: WebElement) {
    await element.sendKeys(Key.UP)
  }

  async moveToTab(element: WebElement) {
    await element.sendKeys(Key.chord(Key.ALT, Key.TAB))
  }

  //  static async keyboardEvents( webelement:WebElement,  key:Key, alphabet:String) {
  //     webelement.sendKeys(Keys.chord(key, alphabet));

  //     }

  async navigate_forward() {
    await browser.navigate().forward()
  }

  async navigate_back() {
    await browser.navigate().back()
  }

  async refresh() {
    await browser.navigate().refresh()
  }

  // static async waitMyTime(i:number) {
  // browser.manage().timeouts().implicitlyWait(i, TimeUnit.SECONDS);

  // }

  public static async clearTextField(element: WebElement) {
    
    await element.clear()
  }

  async clickWebelement(element: WebElement) {
    try {
      browser.sleep(1000)
      let elementIsClickable: boolean = await element.isEnabled()
      // while (elementIsClickable)
      if (elementIsClickable) {
        await element.click()
      }
    } catch (e) {
      console.error('elment not clicked')
    }
  }
  static async radiobutton_Select(Radio: WebElement) {
    let checkstatus: boolean
    checkstatus = await Radio.isSelected()
    console.log("status; " + checkstatus)
    if (checkstatus === true) {
      console.log('RadioButton is already checked')
    } else {
      Radio.click()
      console.log('Selected the Radiobutton')
    }
    return checkstatus;
  }

  async radioButton_Deselect(Radio: WebElement) {
    let checkstatus: boolean
    checkstatus = await Radio.isSelected()
    if (checkstatus === true) {
      await Radio.click()
      console.log('Radio Button is deselected')
    } else {
      console.log('Radio Button was already Deselected')
    }
  }
  //check box checking
  async checkbox_Checking(checkbox: WebElement) {
    let checkstatus: boolean
    checkstatus = await checkbox.isSelected()
    if (checkstatus === true) {
      console.log('Checkbox is already checked')
    } else {
      await checkbox.click()
      console.log('Checked the checkbox')
    }
  }

  // Unchecking
  async checkbox_Unchecking(checkbox: WebElement) {
    let checkstatus: boolean
    checkstatus = await checkbox.isSelected()
    if (checkstatus === true) {
      await checkbox.click()
      console.log('Checkbox is unchecked')
    } else {
      console.log('Checkbox is already unchecked')
    }
  }

  public static async waituntil_ElementIsLoaded(element: ElementFinder) {
    try {
      var until = protractor.ExpectedConditions;
      await browser.wait(until.presenceOf(element), waitTime);
    } catch (e) {
      console.error('elment not Loaded' + e.toString)
    }
  }

  
  
  public static async sendkeys_ud(element: ElementFinder, textToEnter:string, clear:boolean =true){
    try{
      await browser.wait(protractor.ExpectedConditions.elementToBeClickable(element), 30000);
      if(clear){
        await element.clear();
      }
      await element.sendKeys(textToEnter);
    }catch(e){
      console.log("Failed in sendkeys_ud" + e.toString);
    }
  }

  public static async click_ud(element: ElementFinder){
    try{
      await browser.wait(protractor.ExpectedConditions.elementToBeClickable(element), 30000);
      await element.click();
    }catch(e){
      console.log("Failed in click_ud" + e.toString);
    }
  }

  ///duplicate methods for checkUncheckCheckBox
  async checkOrUncheckCheckBox(checkBox: WebElement, flag: boolean) {
    if (!checkBox.isSelected() && flag) {
      checkBox.click()
    }

    if (checkBox.isSelected() && !flag) {
      checkBox.click()
    }
  }

  static async hoverWebelement(HovertoWebElement: ElementFinder) {
    var EC = protractor.ExpectedConditions;
    await browser.wait(EC.visibilityOf(HovertoWebElement), waitTime);
    await browser.actions().mouseMove(HovertoWebElement).perform();
  }

  async getToolTip(toolTipofWebElement: WebElement) {
    let tooltip: string = await toolTipofWebElement.getAttribute('title')
    console.log('Tool text : ' + tooltip)
    return tooltip
  }

  static async getClassAttribute(element: ElementFinder) {
    let attributeValue: string = await element.getAttribute('class')
    return attributeValue
  }
  async getAlert() {
    console.error(
      'get alert text',
      browser
        .switchTo()
        .alert()
        .getText(),
    )
    return await browser.switchTo().alert()
  }
  async acceptAlert() {
    const alert = await this.getAlert()
    alert.accept()
    //await  browser.switchTo().alert().accept()
  }
  async dismissAlert() {
    const alert = await this.getAlert()
    alert.dismiss()
  }
  async getAlertText() {
    const alert = await this.getAlert()
    let alertText = await alert.getText()
    return await alertText
  }
  async isAlertPresent() {
    try {
      browser.switchTo().alert()
      return true
    } catch (e) {
      // no alert present exception
      console.error('No Alert present')
      return false
    }
  }
  async acceptAlertIfPresent() {
    if (this.isAlertPresent()) {
      this.acceptAlert()
    } else {
      console.error(`Alert is not present`)
    }
  }
  async dismissAlertIfPresent() {
    if (this.isAlertPresent()) {
      this.dismissAlert()
    } else {
      console.error(`Alert is not present`)
    }
  }
  async acceptPromptAlert(enterText: string) {
    if (this.isAlertPresent) {
      let alert = await this.getAlert()
      alert.sendKeys(enterText)
      alert.accept()
      console.error('')
    }
  }

  async errorVarificationforAlert(EMCode: string) {
    let alertText = await this.getAlertText()
    // if(alertText.)
    //let actaulAlertcode= alertText.split('').// need to implement once any alert is availalbe
    // if(actaulAlertcode===EMCode)
    {
    }
  }
  async js_scrollToElement(element: WebElement) {
    //log.info("scroll to webelement");
    //await browser.executeScript("window.scrollTo(arguments[0],arguments[1]",element.getLocation().x,element.getLocation().y);
  }

  async js_scrollToElementAndClick(element: WebElement) {
    this.js_scrollToElement(element)
    await element.click()
    //log.info("element is clicked"+element.toString());
  }

  async js_scrollInToView(element: WebElement) {
    //log.info("scroll till element");
    //this.executeScript("arguments[0].scrollInToView()",element);
    await browser.executeScript('arguments[0].scrollInToView()', element)
  }

  async js_scrollInToViewandclick(element: WebElement) {
    this.js_scrollInToView(element)
    await element.click()

    //log.info("element is clicked"+element.toString());
  }

  async js_scrollDownVertically() {
    //log.info("scroll down vertically");
    //this.executeScript("window.scrollTo(0,document.body.scrollHeight)");
    await browser.executeScript('window.scrollTo(0,document.body.scrollHeight)')
  }
  async js_scrollUpVertically() {
    //log.info("scroll up vertically");
    //this.executeScript("window.scrollTo(0,document.body.scrollHeight)");
    await browser.executeScript(
      'window.scrollTo(0,-document.body.scrollHeight)',
    )
  }

  /**
   * zoom by pixel
   * @param pixel
   */
  async js_scrollDownByPixel(pixel: number) {
    await browser.executeScript('window.scrollBY(0,' + pixel + ')')
  }

  async js_scrollUpByPixel(pixel: number) {
    await browser.executeScript('window.scrollBY(0,-' + pixel + ')')
  }

  async js_zoomInBy100Percentage() {
    await browser.executeScript("document.body.style.zoom='100%'")
  }

  async js_zoomInBy60Percentage() {
    await browser.executeScript("document.body.style.zoom='60%'")
  }
  async js_clickElement(element: WebElement) {
    await browser.executeScript('argument[0].click;', element)
  }
  static async isDisplayed(element: ElementFinder) {
    try {
      var until = await protractor.ExpectedConditions;
      await browser.wait(until.presenceOf(element), waitTime);
      console.log('element is displayed')
      return await true
    } catch (e) {
      console.log('element not displayed', e.ElementNotVisibleException)
      return await false
    }
  }

  async js_isNotDisplayed(element: WebElement) {
    try {
      await element.isDisplayed()
      console.log('element is displayed', element.getText())
      return await false
    } catch (e) {
      console.log('element not displayed')
      return await true
    }
  }
  static async js_readValueFromElement(element: ElementFinder) {
    if (null === element) {
      return await null
    }
    var status = this.isDisplayed(element)
    if (status) {
      return await element.getText()
    } else {
      return await null
    }
  }
  static async getText(element: ElementFinder) {
    if (null === element) {
      return null
    }
    let status = await this.isDisplayed(element)
    if (status) {
      return await element.getText()
    } else {
      return await null
    }
  }
  async getAllwindowhandles() {
    return browser.getAllWindowHandles()
  }

  static async getMenuElementsText(element: WebElement[]) {

    let data: string[] = [];
    for (let i = 0; i < element.length; i++) {
      var text = await element[i].getText()
      await data.push(text)
    }
    return data

  }

}
