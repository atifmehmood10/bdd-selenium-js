const {By, until} = require('selenium-webdriver');
const {timeout} = require('../../config');

function browser(driver){
    function waitAndLocateByCSS(selector){
        return driver.wait(until.elementLocated(By.css(selector)), timeout);
    }

    function waitAndLocateByXpath(selector){
        return driver.wait(until.elementLocated(By.xpath(selector)), timeout);
    }
    function waitAndLocateByID(selector){
        return driver.wait(until.elementLocated(By.id(selector)), timeout);
    }
    return {
        waitAndLocateByCSS,
        waitAndLocateByXpath,
        waitAndLocateByID
    };
}

module.exports = browser;
