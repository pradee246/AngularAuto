import { ElementFinder, browser, by, element } from 'protractor';
import { async } from 'q';

describe('angularjs homepage todo list- Fail', async () => { //Suite in Jasmine

  it('Open Angular JS application', async () => {
    await browser.get('https://angularjs.org'); // Entering application url in browser
  })

  it('should add a todo', async () => { // Test in Jasmine
    // Enter text under TODO
    await element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    await element(by.css('[value="add"]')).click(); // Clicks on 'Add' button

  });

  it('verify added todo', async () => {
    // Getting all Todo lists displayed
    await element.all(by.repeater('todo in')).then(function (todoList) {
      // Asserting the TODO's count as 3
      expect(todoList.length.toString()).toEqual('3');
      todoList[2].getText().then(function (text) {
        //Verifying newly entered TODO is added
        expect(text).toEqual('write first protractor test');
      });
    });
  })

});