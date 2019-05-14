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
class HomePage {
    // public emailTextBox: WebElement
    constructor() {
        this.welcome_label = protractor_1.element(protractor_1.by.xpath("//li[@class='menu-item']//span/span[contains(.,'Welcome')]"));
        this.patentSrerchLink = protractor_1.element(protractor_1.by.xpath("//a[@class='card-link but-link']//div//h4[text()='Patent Search']"));
    }
    clickPatentSearch() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Controller_1.Controller.click_ud(this.patentSrerchLink);
        });
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZS5wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvSG9tZS5wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBK0U7QUFDL0UsOERBQTJEO0FBSTNELE1BQWEsUUFBUTtJQUduQixrQ0FBa0M7SUFHbEM7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0REFBNEQsQ0FBQyxDQUFDLENBQUM7UUFDckcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDLENBQUM7SUFFakgsQ0FBQztJQUVLLGlCQUFpQjs7WUFDckIsTUFBTSx1QkFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNuRCxDQUFDO0tBQUE7Q0FFRjtBQWhCRCw0QkFnQkMifQ==