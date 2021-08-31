const seleniumWebdriver = require('selenium-webdriver');
var chrome = require("selenium-webdriver/chrome");
const {setWorldConstructor, setDefaultTimeout} = require('cucumber');
const {timeout, browser} = require('../../config');

class CustomWorld {
    constructor() {
        this.driver = new seleniumWebdriver
            .Builder()
            .forBrowser(browser)
            .build();
    }
}

setDefaultTimeout(timeout);
setWorldConstructor(CustomWorld);
