"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    },
    onComplete: function () {
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbkNvbnNvbGVSZXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb25maWd1cmF0aW9uQ29uc29sZVJlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLElBQUksRUFBRSxZQUFZLEVBQUUsR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUV4RCxJQUFJLGdCQUFnQixHQUFHLFdBQVcsQ0FBQztBQUNuQyxJQUFJLHdCQUF3QixHQUFHLGdCQUFnQixHQUFHLGtCQUFrQixDQUFDO0FBQ3JFLElBQUksc0JBQXNCLEdBQUcsT0FBTyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7QUFDaEYsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUd6QyxRQUFBLE1BQU0sR0FBVztJQUN4QixrREFBa0Q7SUFDbEQsYUFBYSxFQUFFLElBQUk7SUFDbkIscURBQXFEO0lBQ3JELFlBQVksRUFBRTtRQUNWLFdBQVcsRUFBRSxRQUFRO0tBQ3hCO0lBRUQsS0FBSyxFQUFFLENBQUMscUJBQXFCLENBQUM7SUFFOUIsU0FBUyxFQUFFLFVBQVU7SUFFckIsU0FBUyxFQUFFO1FBQ1AsNkJBQTZCO1FBQzdCLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxZQUFZLENBQUM7WUFDMUMsaUJBQWlCLEVBQUUsS0FBSztZQUN4Qix1QkFBdUIsRUFBRSxLQUFLO1lBQzlCLHNCQUFzQixFQUFFLElBQUk7WUFDNUIscUJBQXFCLEVBQUUsSUFBSTtZQUMzQixxQkFBcUIsRUFBRSxJQUFJO1lBQzNCLGlCQUFpQixFQUFFLElBQUk7WUFDdkIsa0JBQWtCLEVBQUUsS0FBSztZQUN6QixtQkFBbUIsRUFBRSxLQUFLO1lBQzFCLGtCQUFrQixFQUFFLEtBQUs7WUFDekIsTUFBTSxFQUFFO2dCQUNKLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixPQUFPLEVBQUUsS0FBSztnQkFDZCxPQUFPLEVBQUUsUUFBUTthQUNwQjtZQUNELFFBQVEsRUFBRTtnQkFDTixPQUFPLEVBQUUsSUFBSTtnQkFDYixPQUFPLEVBQUUsSUFBSTtnQkFDYixPQUFPLEVBQUUsSUFBSTthQUNoQjtZQUNELGdCQUFnQixFQUFFLEVBQUU7U0FDdkIsQ0FBQyxDQUFDLENBQUM7SUFNUixDQUFDO0lBRUQsVUFBVSxFQUFFO0lBR1osQ0FBQztDQUVKLENBQUEifQ==