"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
var { SpecReporter } = require('jasmine-spec-reporter');
var reportsDirectory = './reports';
var dashboardReportDirectory = reportsDirectory + '/dashboardReport';
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var jasmineReporters = require('jasmine-reporters');
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
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: 'testresults',
            filePrefix: 'xmloutput'
        }));
        var browserName, browserVersion, testConfig;
        var capsPromise = protractor_1.browser.getCapabilities();
        capsPromise.then(function (caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');
            //platform = caps.get('platform');
            var HTMLReport = require('protractor-html-reporter-2');
            testConfig = {
                reportTitle: 'Protractor Test Execution Report',
                outputPath: './testresults',
                outputFilename: 'ProtractorTestReport',
                screenshotPath: './screenshots',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true,
            };
            new HTMLReport().from('xmloutput.xml', testConfig);
        });
    },
    onComplete: function () {
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbkhUTUxSZXBvcnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmZpZ3VyYXRpb25IVE1MUmVwb3J0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBNkM7QUFHN0MsSUFBSSxFQUFFLFlBQVksRUFBRSxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBRXhELElBQUksZ0JBQWdCLEdBQUcsV0FBVyxDQUFDO0FBQ25DLElBQUksd0JBQXdCLEdBQUcsZ0JBQWdCLEdBQUcsa0JBQWtCLENBQUM7QUFDckUsSUFBSSxzQkFBc0IsR0FBRyxPQUFPLENBQUMseUNBQXlDLENBQUMsQ0FBQztBQUNoRixJQUFJLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBR3pDLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLGtEQUFrRDtJQUNsRCxhQUFhLEVBQUUsSUFBSTtJQUNuQixxREFBcUQ7SUFDckQsWUFBWSxFQUFFO1FBQ1YsV0FBVyxFQUFFLFFBQVE7S0FDeEI7SUFFRCxLQUFLLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztJQUU5QixTQUFTLEVBQUUsVUFBVTtJQUVyQixTQUFTLEVBQUU7UUFDUCw2QkFBNkI7UUFDN0IsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFlBQVksQ0FBQztZQUMxQyxpQkFBaUIsRUFBRSxLQUFLO1lBQ3hCLHVCQUF1QixFQUFFLEtBQUs7WUFDOUIsc0JBQXNCLEVBQUUsSUFBSTtZQUM1QixxQkFBcUIsRUFBRSxJQUFJO1lBQzNCLHFCQUFxQixFQUFFLElBQUk7WUFDM0IsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixrQkFBa0IsRUFBRSxLQUFLO1lBQ3pCLG1CQUFtQixFQUFFLEtBQUs7WUFDMUIsa0JBQWtCLEVBQUUsS0FBSztZQUN6QixNQUFNLEVBQUU7Z0JBQ0osT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLE9BQU8sRUFBRSxLQUFLO2dCQUNkLE9BQU8sRUFBRSxRQUFRO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFO2dCQUNOLE9BQU8sRUFBRSxJQUFJO2dCQUNiLE9BQU8sRUFBRSxJQUFJO2dCQUNiLE9BQU8sRUFBRSxJQUFJO2FBQ2hCO1lBQ0QsZ0JBQWdCLEVBQUUsRUFBRTtTQUN2QixDQUFDLENBQUMsQ0FBQztRQUVKLElBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDcEQsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDO1lBQy9ELGNBQWMsRUFBRSxJQUFJO1lBQ3BCLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFVBQVUsRUFBRSxXQUFXO1NBQzFCLENBQUMsQ0FBQyxDQUFDO1FBRUosSUFBSSxXQUFXLEVBQUUsY0FBYyxFQUFFLFVBQVUsQ0FBQztRQUM1QyxJQUFJLFdBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRTVDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO1lBQzNCLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3RDLGNBQWMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JDLGtDQUFrQztZQUVsQyxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQztZQUV2RCxVQUFVLEdBQUc7Z0JBQ1QsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsVUFBVSxFQUFFLGVBQWU7Z0JBQzNCLGNBQWMsRUFBRSxzQkFBc0I7Z0JBQ3RDLGNBQWMsRUFBRSxlQUFlO2dCQUMvQixXQUFXLEVBQUUsV0FBVztnQkFDeEIsY0FBYyxFQUFFLGNBQWM7Z0JBQzlCLGlCQUFpQixFQUFFLEtBQUs7Z0JBQ3hCLHdCQUF3QixFQUFFLElBQUk7YUFFakMsQ0FBQztZQUNGLElBQUksVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FBQztJQUtQLENBQUM7SUFFRCxVQUFVLEVBQUU7SUFHWixDQUFDO0NBRUosQ0FBQSJ9