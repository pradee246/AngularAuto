import { Config, browser } from "protractor";


var { SpecReporter } = require('jasmine-spec-reporter');

var HtmlReporter = require('protractor-beautiful-reporter');

export let config: Config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true, // start the test with out web driver start
    // Capabilties to be passed to the webdriver instance
    capabilities: {
        browserName: 'chrome'
    },
    
    specs: ['./specs/DI.Login.specs.js', 
            './specs/DI.PatentSearch.specs.js',
            './specs/FistSpec.js'],

    framework: 'jasmine2',

    onPrepare: function () {
        browser.ignoreSynchronization = true;
        browser.driver.manage().timeouts().implicitlyWait(30000);
        browser.waitForAngular();
        browser.manage().window().maximize(); // maximize the browser before executing the feature files

        //console logs configurations
        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: 'all',      // display stacktrace for each failed assertion, values: (all|specs|summary|none) 
            displaySuccessesSummary: false, // display summary of all successes after execution 
            displayFailuresSummary: true,   // display summary of all failures after execution 
            displayPendingSummary: true,    // display summary of all pending specs after execution 
            displaySuccessfulSpec: true,    // display each successful spec 
            displayFailedSpec: true,        // display each failed spec 
            displayPendingSpec: false,      // display each pending spec 
            displaySpecDuration: true,     // display each spec duration 
            displaySuiteNumber: false,      // display each suite number (hierarchical) 
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
            baseDirectory: 'beauty-report'
            , screenshotsSubfolder: 'screenshots'
            , takeScreenShotsOnlyForFailedSpecs: true
            , docTitle: 'my reporter'
            , preserveDirectory: false
            , clientDefaults: {
                columnSettings: {
                    displayTime: true,
                    displayBrowser: false,
                    displaySessionId: false,
                    inlineScreenshots: false
                }
            }
        }).getJasmine2Reporter());

    }, //onPrepare

    onComplete: function () {

    }

}