const {Given, When, Then} = require('cucumber');
const {
    navigateToPage,
    enterInput,
    click,
    confirmTextVisibility,
    confirmMultipleTextVisibility,
    verifyTitle,
    verifyCompanyLogo
} = require('../common/action');

Given('the browser is open and application is launched', navigateToPage);

Then(/^the user should see the search bar/, confirmMultipleTextVisibility);
//      user clicks "<navigation>" button on navigation bar
Given(/^user clicks "([^"]*)" button on navigation bar$/, click);
//"([^"]*)"
Then(/^the user verifies page title/, verifyTitle);

Then(/^the user verifies company logo/, verifyCompanyLogo);

When ('the user enters {string} into the {string} field', enterInput);

Then(/^the user should see '(.*)' .*$/, confirmTextVisibility);
