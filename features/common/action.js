const {baseURL, email, password} = require('../../config');
const helper = require('../common/browser');
const selector = require('./commonLocators');
const homePagelocator = require('../common/locators/homePageLocators');
const testConstants = require('../common/testConstants');
var assert = require('assert');

const action = {
    navigateToPage: function() {
        return this.driver.get(baseURL);
    },
    click: async function(identifier) {
        switch(identifier){
            case "Home":
                return helper(this.driver).waitAndLocateByID(homePagelocator.homeNavigationID).click();
            case "Form":
                return helper(this.driver).waitAndLocateByID(homePagelocator.formNavigationID).click();
            case "Error":
                return helper(this.driver).waitAndLocateByID(homePagelocator.errorNavigationID).click();
        }
    },
    verifyTitle: async function(){
        var pageTitle = await this.driver.getTitle();
        assert.equal(testConstants.uiTestTitle, pageTitle);
    },
    verifyCompanyLogo: async function(){
        var pageTitle = await helper(this.driver).waitAndLocateByID(homePagelocator.companyLogoID);
        assert.equal(testConstants.uiTestTitle, pageTitle);
    },

    confirmUserId: async function() {
        await helper(this.driver).waitAndLocateByXpath(`//a[contains(@aria-label, "${email}")]`);
    },
    confirmTextVisibility: async function(text) {
        await helper(this.driver).waitAndLocateByXpath(`//*[contains(text(), "${text}")]`);
    },
    confirmMultipleTextVisibility: async function(dataTable) {
        // convert cucumber dataTables to array of objects
        // const arrayOfObjects = dataTable.hashes();
        // const locateText = [];
        //
        // arrayOfObjects.forEach((value) => {
        //     const textArray = Object.values(value);
        //     const [text] = textArray;
        //     locateText.push(helper(this.driver).waitAndLocateByXpath(`//*[text()="${text}"]`));
        // });
        //
        // await Promise.all(locateText);

    }
};

module.exports = action;
