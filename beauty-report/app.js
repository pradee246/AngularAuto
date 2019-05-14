var app = angular.module('reportingApp', []);

//<editor-fold desc="global helpers">

var isValueAnArray = function (val) {
    return Array.isArray(val);
};

var getSpec = function (str) {
    var describes = str.split('|');
    return describes[describes.length - 1];
};
var checkIfShouldDisplaySpecName = function (prevItem, item) {
    if (!prevItem) {
        item.displaySpecName = true;
    } else if (getSpec(item.description) !== getSpec(prevItem.description)) {
        item.displaySpecName = true;
    }
};

var getParent = function (str) {
    var arr = str.split('|');
    str = "";
    for (var i = arr.length - 2; i > 0; i--) {
        str += arr[i] + " > ";
    }
    return str.slice(0, -3);
};

var getShortDescription = function (str) {
    return str.split('|')[0];
};

var countLogMessages = function (item) {
    if ((!item.logWarnings || !item.logErrors) && item.browserLogs && item.browserLogs.length > 0) {
        item.logWarnings = 0;
        item.logErrors = 0;
        for (var logNumber = 0; logNumber < item.browserLogs.length; logNumber++) {
            var logEntry = item.browserLogs[logNumber];
            if (logEntry.level === 'SEVERE') {
                item.logErrors++;
            }
            if (logEntry.level === 'WARNING') {
                item.logWarnings++;
            }
        }
    }
};

var defaultSortFunction = function sortFunction(a, b) {
    if (a.sessionId < b.sessionId) {
        return -1;
    }
    else if (a.sessionId > b.sessionId) {
        return 1;
    }

    if (a.timestamp < b.timestamp) {
        return -1;
    }
    else if (a.timestamp > b.timestamp) {
        return 1;
    }

    return 0;
};


//</editor-fold>

app.controller('ScreenshotReportController', function ($scope, $http) {
    var that = this;
    var clientDefaults = {
    "columnSettings": {
        "displayTime": true,
        "displayBrowser": false,
        "displaySessionId": false,
        "inlineScreenshots": false
    }
};

    $scope.searchSettings = Object.assign({
        description: '',
        allselected: true,
        passed: true,
        failed: true,
        pending: true,
        withLog: true
    }, clientDefaults.searchSettings || {}); // enable customisation of search settings on first page hit

    var initialColumnSettings = clientDefaults.columnSettings; // enable customisation of visible columns on first page hit
    if (initialColumnSettings) {
        if (initialColumnSettings.displayTime !== undefined) {
            // initial settings have be inverted because the html bindings are inverted (e.g. !ctrl.displayTime)
            this.displayTime = !initialColumnSettings.displayTime;
        }
        if (initialColumnSettings.displayBrowser !== undefined) {
            this.displayBrowser = !initialColumnSettings.displayBrowser; // same as above
        }
        if (initialColumnSettings.displaySessionId !== undefined) {
            this.displaySessionId = !initialColumnSettings.displaySessionId; // same as above
        }
        if (initialColumnSettings.displayOS !== undefined) {
            this.displayOS = !initialColumnSettings.displayOS; // same as above
        }
        if (initialColumnSettings.inlineScreenshots !== undefined) {
            this.inlineScreenshots = initialColumnSettings.inlineScreenshots; // this setting does not have to be inverted
        } else {
            this.inlineScreenshots = false;
        }
    }

    this.showSmartStackTraceHighlight = true;

    this.chooseAllTypes = function () {
        var value = true;
        $scope.searchSettings.allselected = !$scope.searchSettings.allselected;
        if (!$scope.searchSettings.allselected) {
            value = false;
        }

        $scope.searchSettings.passed = value;
        $scope.searchSettings.failed = value;
        $scope.searchSettings.pending = value;
        $scope.searchSettings.withLog = value;
    };

    this.isValueAnArray = function (val) {
        return isValueAnArray(val);
    };

    this.getParent = function (str) {
        return getParent(str);
    };

    this.getSpec = function (str) {
        return getSpec(str);
    };

    this.getShortDescription = function (str) {
        return getShortDescription(str);
    };

    this.convertTimestamp = function (timestamp) {
        var d = new Date(timestamp),
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),
            dd = ('0' + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),
            ampm = 'AM',
            time;

        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh === 0) {
            h = 12;
        }

        // ie: 2013-02-18, 8:35 AM
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;

        return time;
    };


    this.round = function (number, roundVal) {
        return (parseFloat(number) / 1000).toFixed(roundVal);
    };


    this.passCount = function () {
        var passCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.passed) {
                passCount++;
            }
        }
        return passCount;
    };


    this.pendingCount = function () {
        var pendingCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.pending) {
                pendingCount++;
            }
        }
        return pendingCount;
    };


    this.failCount = function () {
        var failCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (!result.passed && !result.pending) {
                failCount++;
            }
        }
        return failCount;
    };

    this.passPerc = function () {
        return (this.passCount() / this.totalCount()) * 100;
    };
    this.pendingPerc = function () {
        return (this.pendingCount() / this.totalCount()) * 100;
    };
    this.failPerc = function () {
        return (this.failCount() / this.totalCount()) * 100;
    };
    this.totalCount = function () {
        return this.passCount() + this.failCount() + this.pendingCount();
    };

    this.applySmartHighlight = function (line) {
        if (this.showSmartStackTraceHighlight) {
            if (line.indexOf('node_modules') > -1) {
                return 'greyout';
            }
            if (line.indexOf('  at ') === -1) {
                return '';
            }

            return 'highlight';
        }
        return true;
    };

    var results = [
    {
        "description": "User navigate to DI login page|DI - Login Tests|Feature - Login test",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8952,
        "browser": {
            "name": "chrome",
            "version": "74.0.3729.131"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://qa.ui.dev-innovation.com/tip-innovation/js/lib/jquery-migrate-1.2.1/jquery-migrate-1.2.1.js 40:11 \"JQMIGRATE: jQuery.browser is deprecated\"",
                "timestamp": 1557826684837,
                "type": ""
            }
        ],
        "timestamp": 1557826678268,
        "duration": 8186
    },
    {
        "description": "Enters username and password|DI - Login Tests|Feature - Login test",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8952,
        "browser": {
            "name": "chrome",
            "version": "74.0.3729.131"
        },
        "message": "Passed",
        "browserLogs": [],
        "timestamp": 1557826686657,
        "duration": 5592
    },
    {
        "description": "Should navigate to home page|DI - Login Tests|Feature - Login test",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8952,
        "browser": {
            "name": "chrome",
            "version": "74.0.3729.131"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://qa.ui.dev-innovation.com/en/main.f156fac9516ca9ff551e.js 0:248361 \"The \\\"slidestart\\\" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.\"",
                "timestamp": 1557826697084,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "http://qa.ui.dev-innovation.com/en/main.f156fac9516ca9ff551e.js 0:248361 \"The \\\"slide\\\" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.\"",
                "timestamp": 1557826697085,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "http://qa.ui.dev-innovation.com/en/main.f156fac9516ca9ff551e.js 0:248361 \"The \\\"slideend\\\" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.\"",
                "timestamp": 1557826697085,
                "type": ""
            }
        ],
        "timestamp": 1557826692262,
        "duration": 7855
    },
    {
        "description": "User navigate to Patent search page|Verfiy sub menu items in Patent Search menu",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8952,
        "browser": {
            "name": "chrome",
            "version": "74.0.3729.131"
        },
        "message": "Passed",
        "browserLogs": [],
        "timestamp": 1557826700209,
        "duration": 198
    },
    {
        "description": "Clicks on main menu Search|Verfiy sub menu items in Patent Search menu",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8952,
        "browser": {
            "name": "chrome",
            "version": "74.0.3729.131"
        },
        "message": "Passed",
        "browserLogs": [],
        "timestamp": 1557826700418,
        "duration": 246
    },
    {
        "description": "Three sub menu items is displayed|Verfiy sub menu items in Patent Search menu",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8952,
        "browser": {
            "name": "chrome",
            "version": "74.0.3729.131"
        },
        "message": [
            "Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.",
            "Failed: No element found using locator: By(xpath, //div[@class='mat-menu-content']//button[text()='Literature search'])"
        ],
        "trace": [
            "Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.\n    at Timeout._onTimeout (C:\\Automation\\JS_VSWorkSpace\\ProtractorTypeScriptJasmine0425\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4281:23)\n    at ontimeout (timers.js:436:11)\n    at tryOnTimeout (timers.js:300:5)\n    at listOnTimeout (timers.js:263:5)\n    at Timer.processTimers (timers.js:223:10)",
            "NoSuchElementError: No element found using locator: By(xpath, //div[@class='mat-menu-content']//button[text()='Literature search'])\n    at elementArrayFinder.getWebElements.then (C:\\Automation\\JS_VSWorkSpace\\ProtractorTypeScriptJasmine0425\\node_modules\\protractor\\built\\element.js:814:27)\n    at ManagedPromise.invokeCallback_ (C:\\Automation\\JS_VSWorkSpace\\ProtractorTypeScriptJasmine0425\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Automation\\JS_VSWorkSpace\\ProtractorTypeScriptJasmine0425\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Automation\\JS_VSWorkSpace\\ProtractorTypeScriptJasmine0425\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Automation\\JS_VSWorkSpace\\ProtractorTypeScriptJasmine0425\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Automation\\JS_VSWorkSpace\\ProtractorTypeScriptJasmine0425\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at process._tickCallback (internal/process/next_tick.js:68:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Automation\\JS_VSWorkSpace\\ProtractorTypeScriptJasmine0425\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as getText] (C:\\Automation\\JS_VSWorkSpace\\ProtractorTypeScriptJasmine0425\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as getText] (C:\\Automation\\JS_VSWorkSpace\\ProtractorTypeScriptJasmine0425\\node_modules\\protractor\\built\\element.js:831:22)\n    at Object.<anonymous> (C:\\Automation\\JS_VSWorkSpace\\ProtractorTypeScriptJasmine0425\\specs\\DI.PatentSearch.specs.ts:27:47)\n    at Generator.next (<anonymous>)\n    at fulfilled (C:\\Automation\\JS_VSWorkSpace\\ProtractorTypeScriptJasmine0425\\ConvertedJSFiles\\specs\\DI.PatentSearch.specs.js:4:58)\n    at process._tickCallback (internal/process/next_tick.js:68:7)\nFrom: Task: Run it(\"Three sub menu items is displayed\") in control flow\n    at UserContext.<anonymous> (C:\\Automation\\JS_VSWorkSpace\\ProtractorTypeScriptJasmine0425\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Automation\\JS_VSWorkSpace\\ProtractorTypeScriptJasmine0425\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Automation\\JS_VSWorkSpace\\ProtractorTypeScriptJasmine0425\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Automation\\JS_VSWorkSpace\\ProtractorTypeScriptJasmine0425\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Automation\\JS_VSWorkSpace\\ProtractorTypeScriptJasmine0425\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Automation\\JS_VSWorkSpace\\ProtractorTypeScriptJasmine0425\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Automation\\JS_VSWorkSpace\\ProtractorTypeScriptJasmine0425\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Automation\\JS_VSWorkSpace\\ProtractorTypeScriptJasmine0425\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Automation\\JS_VSWorkSpace\\ProtractorTypeScriptJasmine0425\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Automation\\JS_VSWorkSpace\\ProtractorTypeScriptJasmine0425\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Object.<anonymous> (C:\\Automation\\JS_VSWorkSpace\\ProtractorTypeScriptJasmine0425\\specs\\DI.PatentSearch.specs.ts:23:5)\n    at Generator.next (<anonymous>)\n    at C:\\Automation\\JS_VSWorkSpace\\ProtractorTypeScriptJasmine0425\\ConvertedJSFiles\\specs\\DI.PatentSearch.specs.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Automation\\JS_VSWorkSpace\\ProtractorTypeScriptJasmine0425\\ConvertedJSFiles\\specs\\DI.PatentSearch.specs.js:3:12)\n    at Suite.describe (C:\\Automation\\JS_VSWorkSpace\\ProtractorTypeScriptJasmine0425\\specs\\DI.PatentSearch.specs.ts:11:66)\n    at addSpecsToSuite (C:\\Automation\\JS_VSWorkSpace\\ProtractorTypeScriptJasmine0425\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Automation\\JS_VSWorkSpace\\ProtractorTypeScriptJasmine0425\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Automation\\JS_VSWorkSpace\\ProtractorTypeScriptJasmine0425\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)"
        ],
        "browserLogs": [
            {
                "level": "SEVERE",
                "message": "https://pendo-static-5767260447965184.storage.googleapis.com/guide-content/nCdbaL7O_D5JSBnqttVmqKtSido/ZD0lrLnzkL2exLUKk9thja-_QBk/tJy75r5vY1OeikPxPUI5QBnA9rc.guide.js 17:13 Uncaught SyntaxError: Unexpected token =",
                "timestamp": 1557826701982,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "http://qa.ui.dev-innovation.com/en/1.d3a8990e2b6a75b4ffab.js 0:89255 \"e is using @AutoUnsubscribe but does not implement OnDestroy\"",
                "timestamp": 1557826706630,
                "type": ""
            },
            {
                "level": "WARNING",
                "message": "http://qa.ui.dev-innovation.com/en/1.d3a8990e2b6a75b4ffab.js 0:89255 \"e is using @AutoUnsubscribe but does not implement OnDestroy\"",
                "timestamp": 1557826706630,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://qa.ui.dev-innovation.com/en/main.f156fac9516ca9ff551e.js 0:238495 \"ERROR\" TypeError: Cannot read property 'forEach' of undefined\n    at http://qa.ui.dev-innovation.com/en/6.2c212f43c7b8abbfe5d4.js:1:981083\n    at Array.forEach (<anonymous>)\n    at e.setCheckedFlagsToCollections (http://qa.ui.dev-innovation.com/en/6.2c212f43c7b8abbfe5d4.js:1:981031)\n    at e.combineCollectionsToRegions (http://qa.ui.dev-innovation.com/en/6.2c212f43c7b8abbfe5d4.js:1:979951)\n    at t._next (http://qa.ui.dev-innovation.com/en/6.2c212f43c7b8abbfe5d4.js:1:996533)\n    at t.__tryOrUnsub (http://qa.ui.dev-innovation.com/en/main.f156fac9516ca9ff551e.js:1:347442)\n    at t.next (http://qa.ui.dev-innovation.com/en/main.f156fac9516ca9ff551e.js:1:346587)\n    at t._next (http://qa.ui.dev-innovation.com/en/main.f156fac9516ca9ff551e.js:1:345601)\n    at t.next (http://qa.ui.dev-innovation.com/en/main.f156fac9516ca9ff551e.js:1:345272)\n    at t.notifyNext (http://qa.ui.dev-innovation.com/en/main.f156fac9516ca9ff551e.js:1:833470)",
                "timestamp": 1557826707620,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "https://pendo-static-5767260447965184.storage.googleapis.com/guide-content/5q0AVqVeM5suynR4asoWaII-510/Xr5aOlnNp8NsRbnd4sz_OJqrYmM/mZwhSJWgHvhYUI41Zbv_cehEAXE.guide.js 6:13 Uncaught SyntaxError: Unexpected token =",
                "timestamp": 1557826708105,
                "type": ""
            }
        ],
        "screenShotFile": "screenshots\\009400f9-003e-00d5-007f-002000b500de.png",
        "timestamp": 1557826700681,
        "duration": 30263
    },
    {
        "description": "Open Angular JS application|angularjs homepage todo list- Fail",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8952,
        "browser": {
            "name": "chrome",
            "version": "74.0.3729.131"
        },
        "message": "Passed",
        "browserLogs": [],
        "timestamp": 1557826731309,
        "duration": 6872
    },
    {
        "description": "should add a todo|angularjs homepage todo list- Fail",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8952,
        "browser": {
            "name": "chrome",
            "version": "74.0.3729.131"
        },
        "message": "Passed",
        "browserLogs": [],
        "timestamp": 1557826738201,
        "duration": 459
    },
    {
        "description": "verify added todo|angularjs homepage todo list- Fail",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8952,
        "browser": {
            "name": "chrome",
            "version": "74.0.3729.131"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "timestamp": 1557826738672,
        "duration": 58
    }
];

    this.sortSpecs = function () {
        this.results = results.sort(function sortFunction(a, b) {
    if (a.sessionId < b.sessionId) return -1;else if (a.sessionId > b.sessionId) return 1;

    if (a.timestamp < b.timestamp) return -1;else if (a.timestamp > b.timestamp) return 1;

    return 0;
});
    };

    this.loadResultsViaAjax = function () {

        $http({
            url: './combined.json',
            method: 'GET'
        }).then(function (response) {
                var data = null;
                if (response && response.data) {
                    if (typeof response.data === 'object') {
                        data = response.data;
                    } else if (response.data[0] === '"') { //detect super escaped file (from circular json)
                        data = CircularJSON.parse(response.data); //the file is escaped in a weird way (with circular json)
                    }
                    else
                    {
                        data = JSON.parse(response.data);
                    }
                }
                if (data) {
                    results = data;
                    that.sortSpecs();
                }
            },
            function (error) {
                console.error(error);
            });
    };


    if (clientDefaults.useAjax) {
        this.loadResultsViaAjax();
    } else {
        this.sortSpecs();
    }


});

app.filter('bySearchSettings', function () {
    return function (items, searchSettings) {
        var filtered = [];
        if (!items) {
            return filtered; // to avoid crashing in where results might be empty
        }
        var prevItem = null;

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.displaySpecName = false;

            var isHit = false; //is set to true if any of the search criteria matched
            countLogMessages(item); // modifies item contents

            var hasLog = searchSettings.withLog && item.browserLogs && item.browserLogs.length > 0;
            if (searchSettings.description === '' ||
                (item.description && item.description.toLowerCase().indexOf(searchSettings.description.toLowerCase()) > -1)) {

                if (searchSettings.passed && item.passed || hasLog) {
                    isHit = true;
                } else if (searchSettings.failed && !item.passed && !item.pending || hasLog) {
                    isHit = true;
                } else if (searchSettings.pending && item.pending || hasLog) {
                    isHit = true;
                }
            }
            if (isHit) {
                checkIfShouldDisplaySpecName(prevItem, item);

                filtered.push(item);
                prevItem = item;
            }
        }

        return filtered;
    };
});

