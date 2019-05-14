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
describe('angularjs homepage todo list- Fail', () => __awaiter(this, void 0, void 0, function* () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlzdFNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9GaXN0U3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQWlFO0FBR2pFLFFBQVEsQ0FBQyxvQ0FBb0MsRUFBRSxHQUFTLEVBQUU7SUFFeEQsRUFBRSxDQUFDLDZCQUE2QixFQUFFLEdBQVMsRUFBRTtRQUMzQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxzQ0FBc0M7SUFDcEYsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxHQUFTLEVBQUU7UUFDakMsd0JBQXdCO1FBQ3hCLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUNyRixNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMseUJBQXlCO0lBRTNFLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbUJBQW1CLEVBQUUsR0FBUyxFQUFFO1FBQ2pDLG1DQUFtQztRQUNuQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxRQUFRO1lBQy9ELGtDQUFrQztZQUNsQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoRCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtnQkFDdkMsdUNBQXVDO2dCQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLDZCQUE2QixDQUFDLENBQUM7WUFDdEQsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFSixDQUFDLENBQUEsQ0FBQyxDQUFDIn0=