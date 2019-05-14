
import { PatentSearchPage } from "../pageObjects/PatentSearch.page";
import { HomePage } from "../pageObjects/Home.page";

import { async } from "q";

let PSPage= new PatentSearchPage
let homePage = new HomePage


describe('Verfiy sub menu items in Patent Search menu', async()=>{



    it('User navigate to Patent search page', async () => {
        await homePage.clickPatentSearch()
    });

    it('Clicks on main menu Search', async () => {
        await PSPage.clickSearchMenu()
    });

    it('Three sub menu items is displayed', async () => {
        await PSPage.subMenu_PatentSearch.getText().then(function (text) {
            expect(text).toEqual('Patent search')
        })
        await PSPage.subMenu_LiteratureSearch.getText().then(function (text) {
            expect(text).toEqual('Literature search')
        })
        await PSPage.subMenu_NativeJapaneseSearch.getText().then(function (text) {
            expect(text).toEqual('Native Japanese search')
        })
      });
})
