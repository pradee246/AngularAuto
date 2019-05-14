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
const Login_page_1 = require("../pageObjects/Login.page");
const Home_page_1 = require("../pageObjects/Home.page");
let loginPage = new Login_page_1.LoginPage;
let homePage = new Home_page_1.HomePage;
describe('Feature - Login test', () => __awaiter(this, void 0, void 0, function* () {
    describe('DI - Login Tests', () => __awaiter(this, void 0, void 0, function* () {
        it('User navigate to DI login page', () => __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.get('https://qa.ui.dev-innovation.com/login/');
        }));
        it('Enters username and password', () => __awaiter(this, void 0, void 0, function* () {
            yield loginPage.enterEmail('spochek04@i.ua');
            yield loginPage.enterPassword('addmin1!');
            yield loginPage.clickLogin();
            protractor_1.browser.sleep(5000);
            // return 'pending';
        }));
        it('Should navigate to home page', () => __awaiter(this, void 0, void 0, function* () {
            yield homePage.welcome_label.getText().then(function (text) {
                expect(text).toContain('Welcome');
            });
        }));
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiREkuTG9naW4uc3BlY3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9ESS5Mb2dpbi5zcGVjcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsMkNBQXFDO0FBQ3JDLDBEQUFzRDtBQUN0RCx3REFBb0Q7QUFJcEQsSUFBSSxTQUFTLEdBQUcsSUFBSSxzQkFBUyxDQUFBO0FBQzdCLElBQUksUUFBUSxHQUFHLElBQUksb0JBQVEsQ0FBQTtBQUUzQixRQUFRLENBQUMsc0JBQXNCLEVBQUUsR0FBUyxFQUFFO0lBR3hDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxHQUFTLEVBQUU7UUFDcEMsRUFBRSxDQUFDLGdDQUFnQyxFQUFFLEdBQVMsRUFBRTtZQUM1QyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHlDQUF5QyxDQUFDLENBQUE7UUFDaEUsQ0FBQyxDQUFBLENBQUMsQ0FBQTtRQUdGLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSxHQUFTLEVBQUU7WUFDMUMsTUFBTSxTQUFTLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDN0MsTUFBTSxTQUFTLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQzdCLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BCLG9CQUFvQjtRQUN4QixDQUFDLENBQUEsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLDhCQUE4QixFQUFFLEdBQVMsRUFBRTtZQUMxQyxNQUFNLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtnQkFDdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN0QyxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFTixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRU4sQ0FBQyxDQUFBLENBQUMsQ0FBQSJ9