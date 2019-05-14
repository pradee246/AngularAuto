"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const waitTime = 10000;
class Controller {
    constructor() {
    }
    static dropdown(element) {
        return __awaiter(this, void 0, void 0, function* () {
            var EC = protractor_1.protractor.ExpectedConditions;
            protractor_1.browser.wait(EC.elementToBeClickable(element), waitTime);
            element.click();
        });
    }
    getTitle() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.browser.getTitle();
        });
    }
    getAllWindowHandles() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.browser.getAllWindowHandles();
        });
    }
    static switchToWindow(mainWindow, allWindowHandles) {
        return __awaiter(this, void 0, void 0, function* () {
            // const handles: any = await this.getAllWindowHandles()
            // return await browser.switchTo().window(handles[index])
            for (let handles of allWindowHandles) {
                if (handles != mainWindow) {
                    yield protractor_1.browser.switchTo().window(handles);
                    return yield protractor_1.browser.getCurrentUrl();
                }
            }
        });
    }
    switchToDefaultContent() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.browser.switchTo().defaultContent();
        });
    }
    static currentURL() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.browser.getCurrentUrl();
        });
    }
    switchToFrame(element) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.browser.switchTo().frame(element);
        });
    }
    doubleclick(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.actions()
                .doubleClick(element)
                .perform();
        });
    }
    static click(element) {
        return __awaiter(this, void 0, void 0, function* () {
            var EC = yield protractor_1.protractor.ExpectedConditions;
            yield yield protractor_1.browser.wait(EC.elementToBeClickable(yield element), 2000);
            yield element.click();
        });
    }
    static clickWebelement(element) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(1000);
                let elementIsClickable = yield element.isEnabled();
                // while (elementIsClickable)
                if (elementIsClickable) {
                    yield element.click();
                }
            }
            catch (e) {
                console.error('elment not clicked' + e.toString);
            }
        });
    }
    // async getElementWebElement() {
    //   return await element
    // }
    // async setElement(element: WebElement) {
    //   element = await element
    // }
    pressKeyDown(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield element.sendKeys(protractor_1.Key.DOWN);
        });
    }
    pressKeyEnter(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield element.sendKeys(protractor_1.Key.ENTER);
        });
    }
    static pressKeyESC() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ESCAPE).perform();
        });
    }
    pressKeyUp(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield element.sendKeys(protractor_1.Key.UP);
        });
    }
    moveToTab(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield element.sendKeys(protractor_1.Key.chord(protractor_1.Key.ALT, protractor_1.Key.TAB));
        });
    }
    //  static async keyboardEvents( webelement:WebElement,  key:Key, alphabet:String) {
    //     webelement.sendKeys(Keys.chord(key, alphabet));
    //     }
    navigate_forward() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.navigate().forward();
        });
    }
    navigate_back() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.navigate().back();
        });
    }
    refresh() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.navigate().refresh();
        });
    }
    // static async waitMyTime(i:number) {
    // browser.manage().timeouts().implicitlyWait(i, TimeUnit.SECONDS);
    // }
    static clearTextField(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield element.clear();
        });
    }
    clickWebelement(element) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.sleep(1000);
                let elementIsClickable = yield element.isEnabled();
                // while (elementIsClickable)
                if (elementIsClickable) {
                    yield element.click();
                }
            }
            catch (e) {
                console.error('elment not clicked');
            }
        });
    }
    static radiobutton_Select(Radio) {
        return __awaiter(this, void 0, void 0, function* () {
            let checkstatus;
            checkstatus = yield Radio.isSelected();
            console.log("status; " + checkstatus);
            if (checkstatus === true) {
                console.log('RadioButton is already checked');
            }
            else {
                Radio.click();
                console.log('Selected the Radiobutton');
            }
            return checkstatus;
        });
    }
    radioButton_Deselect(Radio) {
        return __awaiter(this, void 0, void 0, function* () {
            let checkstatus;
            checkstatus = yield Radio.isSelected();
            if (checkstatus === true) {
                yield Radio.click();
                console.log('Radio Button is deselected');
            }
            else {
                console.log('Radio Button was already Deselected');
            }
        });
    }
    //check box checking
    checkbox_Checking(checkbox) {
        return __awaiter(this, void 0, void 0, function* () {
            let checkstatus;
            checkstatus = yield checkbox.isSelected();
            if (checkstatus === true) {
                console.log('Checkbox is already checked');
            }
            else {
                yield checkbox.click();
                console.log('Checked the checkbox');
            }
        });
    }
    // Unchecking
    checkbox_Unchecking(checkbox) {
        return __awaiter(this, void 0, void 0, function* () {
            let checkstatus;
            checkstatus = yield checkbox.isSelected();
            if (checkstatus === true) {
                yield checkbox.click();
                console.log('Checkbox is unchecked');
            }
            else {
                console.log('Checkbox is already unchecked');
            }
        });
    }
    static waituntil_ElementIsLoaded(element) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var until = protractor_1.protractor.ExpectedConditions;
                yield protractor_1.browser.wait(until.presenceOf(element), waitTime);
            }
            catch (e) {
                console.error('elment not Loaded' + e.toString);
            }
        });
    }
    static sendkeys_ud(element, textToEnter, clear = true) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.elementToBeClickable(element), 30000);
                if (clear) {
                    yield element.clear();
                }
                yield element.sendKeys(textToEnter);
            }
            catch (e) {
                console.log("Failed in sendkeys_ud" + e.toString);
            }
        });
    }
    static click_ud(element) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield protractor_1.browser.wait(protractor_1.protractor.ExpectedConditions.elementToBeClickable(element), 30000);
                yield element.click();
            }
            catch (e) {
                console.log("Failed in click_ud" + e.toString);
            }
        });
    }
    ///duplicate methods for checkUncheckCheckBox
    checkOrUncheckCheckBox(checkBox, flag) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!checkBox.isSelected() && flag) {
                checkBox.click();
            }
            if (checkBox.isSelected() && !flag) {
                checkBox.click();
            }
        });
    }
    static hoverWebelement(HovertoWebElement) {
        return __awaiter(this, void 0, void 0, function* () {
            var EC = protractor_1.protractor.ExpectedConditions;
            yield protractor_1.browser.wait(EC.visibilityOf(HovertoWebElement), waitTime);
            yield protractor_1.browser.actions().mouseMove(HovertoWebElement).perform();
        });
    }
    getToolTip(toolTipofWebElement) {
        return __awaiter(this, void 0, void 0, function* () {
            let tooltip = yield toolTipofWebElement.getAttribute('title');
            console.log('Tool text : ' + tooltip);
            return tooltip;
        });
    }
    static getClassAttribute(element) {
        return __awaiter(this, void 0, void 0, function* () {
            let attributeValue = yield element.getAttribute('class');
            return attributeValue;
        });
    }
    getAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            console.error('get alert text', protractor_1.browser
                .switchTo()
                .alert()
                .getText());
            return yield protractor_1.browser.switchTo().alert();
        });
    }
    acceptAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.getAlert();
            alert.accept();
            //await  browser.switchTo().alert().accept()
        });
    }
    dismissAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.getAlert();
            alert.dismiss();
        });
    }
    getAlertText() {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.getAlert();
            let alertText = yield alert.getText();
            return yield alertText;
        });
    }
    isAlertPresent() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                protractor_1.browser.switchTo().alert();
                return true;
            }
            catch (e) {
                // no alert present exception
                console.error('No Alert present');
                return false;
            }
        });
    }
    acceptAlertIfPresent() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isAlertPresent()) {
                this.acceptAlert();
            }
            else {
                console.error(`Alert is not present`);
            }
        });
    }
    dismissAlertIfPresent() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isAlertPresent()) {
                this.dismissAlert();
            }
            else {
                console.error(`Alert is not present`);
            }
        });
    }
    acceptPromptAlert(enterText) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isAlertPresent) {
                let alert = yield this.getAlert();
                alert.sendKeys(enterText);
                alert.accept();
                console.error('');
            }
        });
    }
    errorVarificationforAlert(EMCode) {
        return __awaiter(this, void 0, void 0, function* () {
            let alertText = yield this.getAlertText();
            // if(alertText.)
            //let actaulAlertcode= alertText.split('').// need to implement once any alert is availalbe
            // if(actaulAlertcode===EMCode)
            {
            }
        });
    }
    js_scrollToElement(element) {
        return __awaiter(this, void 0, void 0, function* () {
            //log.info("scroll to webelement");
            //await browser.executeScript("window.scrollTo(arguments[0],arguments[1]",element.getLocation().x,element.getLocation().y);
        });
    }
    js_scrollToElementAndClick(element) {
        return __awaiter(this, void 0, void 0, function* () {
            this.js_scrollToElement(element);
            yield element.click();
            //log.info("element is clicked"+element.toString());
        });
    }
    js_scrollInToView(element) {
        return __awaiter(this, void 0, void 0, function* () {
            //log.info("scroll till element");
            //this.executeScript("arguments[0].scrollInToView()",element);
            yield protractor_1.browser.executeScript('arguments[0].scrollInToView()', element);
        });
    }
    js_scrollInToViewandclick(element) {
        return __awaiter(this, void 0, void 0, function* () {
            this.js_scrollInToView(element);
            yield element.click();
            //log.info("element is clicked"+element.toString());
        });
    }
    js_scrollDownVertically() {
        return __awaiter(this, void 0, void 0, function* () {
            //log.info("scroll down vertically");
            //this.executeScript("window.scrollTo(0,document.body.scrollHeight)");
            yield protractor_1.browser.executeScript('window.scrollTo(0,document.body.scrollHeight)');
        });
    }
    js_scrollUpVertically() {
        return __awaiter(this, void 0, void 0, function* () {
            //log.info("scroll up vertically");
            //this.executeScript("window.scrollTo(0,document.body.scrollHeight)");
            yield protractor_1.browser.executeScript('window.scrollTo(0,-document.body.scrollHeight)');
        });
    }
    /**
     * zoom by pixel
     * @param pixel
     */
    js_scrollDownByPixel(pixel) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.executeScript('window.scrollBY(0,' + pixel + ')');
        });
    }
    js_scrollUpByPixel(pixel) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.executeScript('window.scrollBY(0,-' + pixel + ')');
        });
    }
    js_zoomInBy100Percentage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.executeScript("document.body.style.zoom='100%'");
        });
    }
    js_zoomInBy60Percentage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.executeScript("document.body.style.zoom='60%'");
        });
    }
    js_clickElement(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.executeScript('argument[0].click;', element);
        });
    }
    static isDisplayed(element) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var until = yield protractor_1.protractor.ExpectedConditions;
                yield protractor_1.browser.wait(until.presenceOf(element), waitTime);
                console.log('element is displayed');
                return yield true;
            }
            catch (e) {
                console.log('element not displayed', e.ElementNotVisibleException);
                return yield false;
            }
        });
    }
    js_isNotDisplayed(element) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield element.isDisplayed();
                console.log('element is displayed', element.getText());
                return yield false;
            }
            catch (e) {
                console.log('element not displayed');
                return yield true;
            }
        });
    }
    static js_readValueFromElement(element) {
        return __awaiter(this, void 0, void 0, function* () {
            if (null === element) {
                return yield null;
            }
            var status = this.isDisplayed(element);
            if (status) {
                return yield element.getText();
            }
            else {
                return yield null;
            }
        });
    }
    static getText(element) {
        return __awaiter(this, void 0, void 0, function* () {
            if (null === element) {
                return null;
            }
            let status = yield this.isDisplayed(element);
            if (status) {
                return yield element.getText();
            }
            else {
                return yield null;
            }
        });
    }
    getAllwindowhandles() {
        return __awaiter(this, void 0, void 0, function* () {
            return protractor_1.browser.getAllWindowHandles();
        });
    }
    static getMenuElementsText(element) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = [];
            for (let i = 0; i < element.length; i++) {
                var text = yield element[i].getText();
                yield data.push(text);
            }
            return data;
        });
    }
}
exports.Controller = Controller;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbW1vbkZ1bmN0aW9ucy9Db250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBb0c7QUFHcEcsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFBO0FBRXRCLE1BQWEsVUFBVTtJQUNyQjtJQUNBLENBQUM7SUFJRCxNQUFNLENBQU8sUUFBUSxDQUFDLE9BQXNCOztZQUMxQyxJQUFJLEVBQUUsR0FBRyx1QkFBVSxDQUFDLGtCQUFrQixDQUFDO1lBQ3ZDLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN6RCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDakIsQ0FBQztLQUFBO0lBRUssUUFBUTs7WUFDWixPQUFPLE1BQU0sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUNqQyxDQUFDO0tBQUE7SUFFSyxtQkFBbUI7O1lBQ3ZCLE9BQU8sTUFBTSxvQkFBTyxDQUFDLG1CQUFtQixFQUFFLENBQUE7UUFDNUMsQ0FBQztLQUFBO0lBRUQsTUFBTSxDQUFPLGNBQWMsQ0FBQyxVQUFrQixFQUFFLGdCQUEwQjs7WUFDeEUsd0RBQXdEO1lBQ3hELHlEQUF5RDtZQUN6RCxLQUFLLElBQUksT0FBTyxJQUFJLGdCQUFnQixFQUFFO2dCQUNwQyxJQUFJLE9BQU8sSUFBSSxVQUFVLEVBQUU7b0JBQ3pCLE1BQU0sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3pDLE9BQU8sTUFBTSxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFBO2lCQUNyQzthQUNGO1FBQ0gsQ0FBQztLQUFBO0lBRUssc0JBQXNCOztZQUMxQixPQUFPLE1BQU0sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtRQUNs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