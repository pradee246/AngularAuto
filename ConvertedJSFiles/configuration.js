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
        // xml report generated for dashboard
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: reportsDirectory + '/xml',
            filePrefix: 'xmlOutput'
        }));
        var fs = require('fs-extra');
        if (!fs.existsSync(dashboardReportDirectory)) {
            fs.mkdirSync(dashboardReportDirectory);
        }
        jasmine.getEnv().addReporter({
            specDone: function (result) {
                if (result.status == 'failed') {
                    protractor_1.browser.getCapabilities().then(function (caps) {
                        var browserName = caps.get('browserName');
                        protractor_1.browser.takeScreenshot().then(function (png) {
                            var stream = fs.createWriteStream(dashboardReportDirectory + '/' + browserName + '-' + result.fullName + '.png');
                            stream.write(new Buffer(png, 'base64'));
                            stream.end();
                        });
                    });
                }
            }
        });
    },
    onComplete: function () {
        var browserName, browserVersion, platform;
        var capsPromise = protractor_1.browser.getCapabilities();
        var testConfig;
        capsPromise.then(function (caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');
            platform = caps.get('platform');
            var HTMLReport = require('protractor-html-reporter-2');
            testConfig = {
                reportTitle: 'Protractor Test Execution Report',
                outputPath: dashboardReportDirectory,
                outputFilename: 'index',
                screenshotPath: './',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true,
                testPlatform: platform
            };
            new HTMLReport().from(reportsDirectory + '/xml/xmlOutput.xml', testConfig);
        });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBNkM7QUFHN0MsSUFBSSxFQUFFLFlBQVksRUFBRSxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBRXhELElBQUksZ0JBQWdCLEdBQUcsV0FBVyxDQUFDO0FBQ25DLElBQUksd0JBQXdCLEdBQUcsZ0JBQWdCLEdBQUcsa0JBQWtCLENBQUM7QUFDckUsSUFBSSxzQkFBc0IsR0FBRyxPQUFPLENBQUMseUNBQXlDLENBQUMsQ0FBQztBQUNoRixJQUFJLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBR3pDLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLGtEQUFrRDtJQUNsRCxhQUFhLEVBQUUsSUFBSTtJQUNuQixxREFBcUQ7SUFDckQsWUFBWSxFQUFFO1FBQ1YsV0FBVyxFQUFFLFFBQVE7S0FDeEI7SUFFRCxLQUFLLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztJQUU5QixTQUFTLEVBQUUsVUFBVTtJQUVyQixTQUFTLEVBQUU7UUFDUCw2QkFBNkI7UUFDN0IsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFlBQVksQ0FBQztZQUMxQyxpQkFBaUIsRUFBRSxLQUFLO1lBQ3hCLHVCQUF1QixFQUFFLEtBQUs7WUFDOUIsc0JBQXNCLEVBQUUsSUFBSTtZQUM1QixxQkFBcUIsRUFBRSxJQUFJO1lBQzNCLHFCQUFxQixFQUFFLElBQUk7WUFDM0IsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixrQkFBa0IsRUFBRSxLQUFLO1lBQ3pCLG1CQUFtQixFQUFFLEtBQUs7WUFDMUIsa0JBQWtCLEVBQUUsS0FBSztZQUN6QixNQUFNLEVBQUU7Z0JBQ0osT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLE9BQU8sRUFBRSxLQUFLO2dCQUNkLE9BQU8sRUFBRSxRQUFRO2FB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