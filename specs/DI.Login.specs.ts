
import { browser } from "protractor";
import { LoginPage } from "../pageObjects/Login.page";
import { HomePage } from "../pageObjects/Home.page";
import { async } from "q";


let loginPage = new LoginPage
let homePage = new HomePage

describe('Feature - Login test', async () => {


    describe('DI - Login Tests', async () => {
        it('User navigate to DI login page', async () => {
            await browser.get('https://qa.ui.dev-innovation.com/login/')
        })


        it('Enters username and password', async () => {
            await loginPage.enterEmail('spochek04@i.ua');
            await loginPage.enterPassword('addmin1!');
            await loginPage.clickLogin();
            browser.sleep(5000);
            // return 'pending';
        });

        it('Should navigate to home page', async () => {
            await homePage.welcome_label.getText().then(function (text) {
                expect(text).toContain('Welcome');
            })
        })

    })

})