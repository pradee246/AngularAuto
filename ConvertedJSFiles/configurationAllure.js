"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
var { SpecReporter } = require('jasmine-spec-reporter');
exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    // Capabilties to be passed to the webdriver instance
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['./specs/FistSpec.js'],
    framework: 'jasmine2',
    onPrepare: function () {
        //console logs configurations
        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: 'all',
            displaySuccessesSummary: false,
            displayFailuresSummary: true,
            displayPendingSummary: true,
            displaySuccessfulSpec: true,
            displayFailedSpec: true,
            displayPendingSpec: false,
            displaySpecDuration: false,
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
        var AllureReporter = require('jasmine-allure2-reporter');
        var allure = require('jasmine-allure2-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
        jasmine.getEnv().afterEach(function (done) {
            protractor_1.browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64');
                }, 'image/png')();
                done();
            });
        });
    },
    onComplete: function () {
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbkFsbHVyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmZpZ3VyYXRpb25BbGx1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBNkM7QUFHN0MsSUFBSSxFQUFFLFlBQVksRUFBRSxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBSTdDLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLGtEQUFrRDtJQUNsRCxhQUFhLEVBQUUsSUFBSTtJQUNuQixxREFBcUQ7SUFDckQsWUFBWSxFQUFFO1FBQ1YsV0FBVyxFQUFFLFFBQVE7S0FDeEI7SUFFRCxLQUFLLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztJQUU5QixTQUFTLEVBQUUsVUFBVTtJQUVyQixTQUFTLEVBQUU7UUFDUCw2QkFBNkI7UUFDN0IsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFlBQVksQ0FBQztZQUMxQyxpQkFBaUIsRUFBRSxLQUFLO1lBQ3hCLHVCQUF1QixFQUFFLEtBQUs7WUFDOUIsc0JBQXNCLEVBQUUsSUFBSTtZQUM1QixxQkFBcUIsRUFBRSxJQUFJO1lBQzNCLHFCQUFxQixFQUFFLElBQUk7WUFDM0IsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixrQkFBa0IsRUFBRSxLQUFLO1lBQ3pCLG1CQUFtQixFQUFFLEtBQUs7WUFDMUIsa0JBQWtCLEVBQUUsS0FBSztZQUN6QixNQUFNLEVBQUU7Z0JBQ0osT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLE9BQU8sRUFBRSxLQUFLO2dCQUNkLE9BQU8sRUFBRSxRQUFRO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFO2dCQUNOLE9BQU8sRUFBRSxJQUFJO2dCQUNiLE9BQU8sRUFBRSxJQUFJO2dCQUNiLE9BQU8sRUFBRSxJQUFJO2FBQ2hCO1lBQ0QsZ0JBQWdCLEVBQUUsRUFBRTtTQUN2QixDQUFDLENBQUMsQ0FBQztRQUdKLElBQUksY0FBYyxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3pELElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxjQUFjLENBQUM7WUFDNUMsVUFBVSxFQUFFLGdCQUFnQjtTQUMvQixDQUFDLENBQUMsQ0FBQztRQUNKLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBVSxJQUFJO1lBQ3JDLG9CQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRztnQkFDdkMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRTtvQkFDbEMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUE7Z0JBQ3BDLENBQUMsRUFBRSxXQUFXLENBQUMsRUFBRSxDQUFDO2dCQUNsQixJQUFJLEVBQUUsQ0FBQztZQUNYLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsVUFBVSxFQUFFO0lBRVosQ0FBQztDQUVKLENBQUEifQ==