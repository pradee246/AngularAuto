"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
var { SpecReporter } = require('jasmine-spec-reporter');
var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    // Capabilties to be passed to the webdriver instance
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['./specs/DI.Login.specs.js',
        './specs/DI.PatentSearch.specs.js',
        './specs/FistSpec.js'],
    framework: 'jasmine2',
    onPrepare: function () {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.driver.manage().timeouts().implicitlyWait(30000);
        protractor_1.browser.waitForAngular();
        protractor_1.browser.manage().window().maximize(); // maximize the browser before executing the feature files
        //console logs configurations
        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: 'all',
            displaySuccessesSummary: false,
            displayFailuresSummary: true,
            displayPendingSummary: true,
            displaySuccessfulSpec: true,
            displayFailedSpec: true,
            displayPendingSpec: false,
            displaySpecDuration: true,
            displaySuiteNumber: false,
            colors: {
                success: 'green',
                failure: 'red',
                pending: 'yellow'
            },
            prefixes: {
                success: '✓ ',
                failure: '✗ ',
                pending: '* '
            },
            customProcessors: []
        }));
        // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'beauty-report',
            screenshotsSubfolder: 'screenshots',
            takeScreenShotsOnlyForFailedSpecs: true,
            docTitle: 'my reporter',
            preserveDirectory: false,
            clientDefaults: {
                columnSettings: {
                    displayTime: true,
                    displayBrowser: false,
                    displaySessionId: false,
                    inlineScreenshots: false
                }
            }
        }).getJasmine2Reporter());
    },
    onComplete: function () {
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbkJlYXV0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmZpZ3VyYXRpb25CZWF1dHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBNkM7QUFHN0MsSUFBSSxFQUFFLFlBQVksRUFBRSxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBRXhELElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBRWpELFFBQUEsTUFBTSxHQUFXO0lBQ3hCLGtEQUFrRDtJQUNsRCxhQUFhLEVBQUUsSUFBSTtJQUNuQixxREFBcUQ7SUFDckQsWUFBWSxFQUFFO1FBQ1YsV0FBVyxFQUFFLFFBQVE7S0FDeEI7SUFFRCxLQUFLLEVBQUUsQ0FBQywyQkFBMkI7UUFDM0Isa0NBQWtDO1FBQ2xDLHFCQUFxQixDQUFDO0lBRTlCLFNBQVMsRUFBRSxVQUFVO0lBRXJCLFNBQVMsRUFBRTtRQUNQLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBQ3JDLG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6RCxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3pCLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQywwREFBMEQ7UUFFaEcsNkJBQTZCO1FBQzdCLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxZQUFZLENBQUM7WUFDMUMsaUJBQWlCLEVBQUUsS0FBSztZQUN4Qix1QkFBdUIsRUFBRSxLQUFLO1lBQzlCLHNCQUFzQixFQUFFLElBQUk7WUFDNUIscUJBQXFCLEVBQUUsSUFBSTtZQUMzQixxQkFBcUIsRUFBRSxJQUFJO1lBQzNCLGlCQUFpQixFQUFFLElBQUk7WUFDdkIsa0JBQWtCLEVBQUUsS0FBSztZQUN6QixtQkFBbUIsRUFBRSxJQUFJO1lBQ3pCLGtCQUFrQixFQUFFLEtBQUs7WUFDekIsTUFBTSxFQUFFO2dCQUNKLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixPQUFPLEVBQUUsS0FBSztnQkFDZCxPQUFPLEVBQUUsUUFBUTthQUNwQjtZQUNELFFBQVEsRUFBRTtnQkFDTixPQUFPLEVBQUUsSUFBSTtnQkFDYixPQUFPLEVBQUUsSUFBSTtnQkFDYixPQUFPLEVBQUUsSUFBSTthQUNoQjtZQUNELGdCQUFnQixFQUFFLEVBQUU7U0FDdkIsQ0FBQyxDQUFDLENBQUM7UUFFSix5RUFBeUU7UUFDekUsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFlBQVksQ0FBQztZQUMxQyxhQUFhLEVBQUUsZUFBZTtZQUM1QixvQkFBb0IsRUFBRSxhQUFhO1lBQ25DLGlDQUFpQyxFQUFFLElBQUk7WUFDdkMsUUFBUSxFQUFFLGFBQWE7WUFDdkIsaUJBQWlCLEVBQUUsS0FBSztZQUN4QixjQUFjLEVBQUU7Z0JBQ2QsY0FBYyxFQUFFO29CQUNaLFdBQVcsRUFBRSxJQUFJO29CQUNqQixjQUFjLEVBQUUsS0FBSztvQkFDckIsZ0JBQWdCLEVBQUUsS0FBSztvQkFDdkIsaUJBQWlCLEVBQUUsS0FBSztpQkFDM0I7YUFDSjtTQUNKLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7SUFFOUIsQ0FBQztJQUVELFVBQVUsRUFBRTtJQUVaLENBQUM7Q0FFSixDQUFBIn0=