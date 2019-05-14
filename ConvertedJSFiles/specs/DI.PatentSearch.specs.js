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
const PatentSearch_page_1 = require("../pageObjects/PatentSearch.page");
const Home_page_1 = require("../pageObjects/Home.page");
let PSPage = new PatentSearch_page_1.PatentSearchPage;
let homePage = new Home_page_1.HomePage;
describe('Verfiy sub menu items in Patent Search menu', () => __awaiter(this, void 0, void 0, function* () {
    it('User navigate to Patent search page', () => __awaiter(this, void 0, void 0, function* () {
        yield homePage.clickPatentSearch();
    }));
    it('Clicks on main menu Search', () => __awaiter(this, void 0, void 0, function* () {
        yield PSPage.clickSearchMenu();
    }));
    it('Three sub menu items is displayed', () => __awaiter(this, void 0, void 0, function* () {
        yield PSPage.subMenu_PatentSearch.getText().then(function (text) {
            expect(text).toEqual('Patent search');
        });
        yield PSPage.subMenu_LiteratureSearch.getText().then(function (text) {
            expect(text).toEqual('Literature search');
        });
        yield PSPage.subMenu_NativeJapaneseSearch.getText().then(function (text) {
            expect(text).toEqual('Native Japanese search');
        });
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiREkuUGF0ZW50U2VhcmNoLnNwZWNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3BlY3MvREkuUGF0ZW50U2VhcmNoLnNwZWNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSx3RUFBb0U7QUFDcEUsd0RBQW9EO0FBSXBELElBQUksTUFBTSxHQUFFLElBQUksb0NBQWdCLENBQUE7QUFDaEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxvQkFBUSxDQUFBO0FBRzNCLFFBQVEsQ0FBQyw2Q0FBNkMsRUFBRSxHQUFPLEVBQUU7SUFJN0QsRUFBRSxDQUFDLHFDQUFxQyxFQUFFLEdBQVMsRUFBRTtRQUNqRCxNQUFNLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO0lBQ3RDLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNEJBQTRCLEVBQUUsR0FBUyxFQUFFO1FBQ3hDLE1BQU0sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFBO0lBQ2xDLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbUNBQW1DLEVBQUUsR0FBUyxFQUFFO1FBQy9DLE1BQU0sTUFBTSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUk7WUFDM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQTtRQUN6QyxDQUFDLENBQUMsQ0FBQTtRQUNGLE1BQU0sTUFBTSxDQUFDLHdCQUF3QixDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUk7WUFDL0QsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1FBQzdDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxNQUFNLENBQUMsNEJBQTRCLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtZQUNuRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUE7UUFDbEQsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ1QsQ0FBQyxDQUFBLENBQUMsQ0FBQSJ9