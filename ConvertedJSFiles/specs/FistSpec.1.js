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
describe('angularjs homepage todo list', () => __awaiter(this, void 0, void 0, function* () {
    it('Open Angular JS application', () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get('https://angularjs.org'); // Entering application url in browser
    }));
    it('should add a todo', () => __awaiter(this, void 0, void 0, function* () {
        // Enter text under TODO
        yield protractor_1.element(protractor_1.by.model('todoList.todoText')).sendKeys('write first protractor test');
        yield protractor_1.element(protractor_1.by.css('[value="add"]')).click(); // Clicks on 'Add' button
    }));
    it('verify added todo', () => __awaiter(this, void 0, void 0, function* () {
        // Getting all Todo lists displayed
        yield protractor_1.element.all(protractor_1.by.repeater('todo in')).then(function (todoList) {
            // Asserting the TODO's count as 3
            expect(todoList.length.toString()).toEqual('3');
            todoList[2].getText().then(function (text) {
                //Verifying newly entered TODO is added
                expect(text).toEqual('write first protractor test');
            });
        });
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlzdFNwZWMuMS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWNzL0Zpc3RTcGVjLjEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFpRTtBQUdqRSxRQUFRLENBQUMsOEJBQThCLEVBQUUsR0FBUyxFQUFFO0lBRWxELEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSxHQUFTLEVBQUU7UUFDM0MsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsc0NBQXNDO0lBQ3BGLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsbUJBQW1CLEVBQUUsR0FBUyxFQUFFO1FBQ2pDLHdCQUF3QjtRQUN4QixNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDckYsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLHlCQUF5QjtJQUUzRSxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG1CQUFtQixFQUFFLEdBQVMsRUFBRTtRQUNqQyxtQ0FBbUM7UUFDbkMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsUUFBUTtZQUMvRCxrQ0FBa0M7WUFDbEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEQsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUk7Z0JBQ3ZDLHVDQUF1QztnQkFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1lBQ3RELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRUosQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9