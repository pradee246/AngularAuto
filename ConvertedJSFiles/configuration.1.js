"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
var { SpecReporter } = require('jasmine-spec-reporter');
var reportsDirectory = './reports';
var dashboardReportDirectory = reportsDirectory + '/dashboardReport';
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var jasmineReporters = require('jasmine-reporters');
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
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
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './test/reports/',
            screenshotsFolder: 'images',
            takeScreenshots: true,
            takeScreenshotsOnlyOnFailures: true
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi4xLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uZmlndXJhdGlvbi4xLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQTZDO0FBRzdDLElBQUksRUFBRSxZQUFZLEVBQUUsR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUV4RCxJQUFJLGdCQUFnQixHQUFHLFdBQVcsQ0FBQztBQUNuQyxJQUFJLHdCQUF3QixHQUFHLGdCQUFnQixHQUFHLGtCQUFrQixDQUFDO0FBQ3JFLElBQUksc0JBQXNCLEdBQUcsT0FBTyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7QUFDaEYsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUVwRCxJQUFJLG9CQUFvQixHQUFHLE9BQU8sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0FBRzdELFFBQUEsTUFBTSxHQUFXO0lBQ3hCLGtEQUFrRDtJQUNsRCxhQUFhLEVBQUUsSUFBSTtJQUNuQixxREFBcUQ7SUFDckQsWUFBWSxFQUFFO1FBQ1YsV0FBVyxFQUFFLFFBQVE7S0FDeEI7SUFFRCxLQUFLLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztJQUU5QixTQUFTLEVBQUUsVUFBVTtJQUVyQixTQUFTLEVBQUU7UUFDUCw2QkFBNkI7UUFDN0IsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFlBQVksQ0FBQztZQUMxQyxpQkFBaUIsRUFBRSxLQUFLO1lBQ3hCLHVCQUF1QixFQUFFLEtBQUs7WUFDOUIsc0JBQXNCLEVBQUUsSUFBSTtZQUM1QixxQkFBcUIsRUFBRSxJQUFJO1lBQzNCLHFCQUFxQixFQUFFLElBQUk7WUFDM0IsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixrQkFBa0IsRUFBRSxLQUFLO1lBQ3pCLG1CQUFtQixFQUFFLEtBQUs7WUFDMUIsa0JBQWtCLEVBQUUsS0FBSztZQUN6QixNQUFNLEVBQUU7Z0JBQ0osT0FBTyxF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