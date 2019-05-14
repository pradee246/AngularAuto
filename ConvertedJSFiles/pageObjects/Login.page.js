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
const Controller_1 = require("../commonFunctions/Controller");
class LoginPage {
    constructor() {
        this.emailTextBox = protractor_1.$('#tr-login-username');
        // this.emailTextBox = $('input[tr-login="username"]')
        //this.emailTextBox=element(by.css('tr-login-username'))
        // this.emailTextBox=element(by.id('#tr-login-username'))
        this.passwordTextBox = protractor_1.$('#tr-login-password');
        this.loginBtn = protractor_1.$('#tr-email-form > div > div > div > input');
        this.loginErrorTxt = protractor_1.$('#loginErrorText');
    }
    enterEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Controller_1.Controller.sendkeys_ud(this.emailTextBox, email);
        });
    }
    enterPassword(pwd) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Controller_1.Controller.sendkeys_ud(this.passwordTextBox, pwd);
        });
    }
    clickLogin() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Controller_1.Controller.click_ud(this.loginBtn);
        });
    }
    getLoginErrorText() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.sleep(1500);
            return yield this.loginErrorTxt.getAttribute('innerHTML');
        });
    }
    login(email, pwd) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.enterEmail(email);
            yield this.enterPassword(pwd);
            yield Controller_1.Controller.click_ud(this.loginBtn);
            yield protractor_1.browser.sleep(10000);
        });
    }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW4ucGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL0xvZ2luLnBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUErRTtBQUMvRSw4REFBMkQ7QUFNM0QsTUFBYSxTQUFTO0lBTXBCO1FBRUUsSUFBSSxDQUFDLFlBQVksR0FBRyxjQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtRQUMzQyxzREFBc0Q7UUFDdEQsd0RBQXdEO1FBQ3hELHlEQUF5RDtRQUN6RCxJQUFJLENBQUMsZUFBZSxHQUFHLGNBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO1FBQzlDLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBQyxDQUFDLDBDQUEwQyxDQUFDLENBQUE7UUFDN0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxjQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0lBRUssVUFBVSxDQUFDLEtBQWE7O1lBQzVCLE1BQU0sdUJBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN6RCxDQUFDO0tBQUE7SUFHSyxhQUFhLENBQUMsR0FBVzs7WUFDN0IsTUFBTSx1QkFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzFELENBQUM7S0FBQTtJQUVLLFVBQVU7O1lBQ2QsTUFBTSx1QkFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0MsQ0FBQztLQUFBO0lBRUssaUJBQWlCOztZQUNyQixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ3pCLE9BQU8sTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUMzRCxDQUFDO0tBQUE7SUFFSyxLQUFLLENBQUMsS0FBYSxFQUFFLEdBQVc7O1lBQ3BDLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUM1QixNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDN0IsTUFBTSx1QkFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7WUFFeEMsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUU1QixDQUFDO0tBQUE7Q0FNRjtBQWhERCw4QkFnREMifQ==