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
class PatentSearchPage {
    // public emailTextBox: WebElement
    constructor() {
        this.menu_Search = protractor_1.element(protractor_1.by.xpath("//li[@class='main-nav-item ng-star-inserted']//span[text()='Search']"));
        this.subMenu_PatentSearch = protractor_1.element(protractor_1.by.xpath("//div[@class='mat-menu-content']//button[text()='Patent search']"));
        this.subMenu_LiteratureSearch = protractor_1.element(protractor_1.by.xpath("//div[@class='mat-menu-content']//button[text()='Literature search']"));
        this.subMenu_NativeJapaneseSearch = protractor_1.element(protractor_1.by.xpath("//div[@class='mat-menu-content']//button[text()='Native Japanese search']"));
    }
    clickSearchMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Controller_1.Controller.click_ud(this.menu_Search);
        });
    }
}
exports.PatentSearchPage = PatentSearchPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF0ZW50U2VhcmNoLnBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9QYXRlbnRTZWFyY2gucGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQStFO0FBQy9FLDhEQUEyRDtBQUkzRCxNQUFhLGdCQUFnQjtJQUszQixrQ0FBa0M7SUFHbEM7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzRUFBc0UsQ0FBQyxDQUFDLENBQUM7UUFDN0csSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDLENBQUM7UUFDbEgsSUFBSSxDQUFDLHdCQUF3QixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzRUFBc0UsQ0FBQyxDQUFDLENBQUM7UUFDMUgsSUFBSSxDQUFDLDRCQUE0QixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywyRUFBMkUsQ0FBQyxDQUFDLENBQUM7SUFFckksQ0FBQztJQUVLLGVBQWU7O1lBQ25CLE1BQU0sdUJBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlDLENBQUM7S0FBQTtDQUlGO0FBdEJELDRDQXNCQyJ9