const {Given, When, Then} = require('cucumber');
const {
    navigateToPage,
    enterInput,
    click,
    confirmTextVisibility,
    confirmMultipleTextVisibility,
    confirmUserId
} = require('../../common/action');

Then(/^the user clicks on '(.*)' .*$/, click)

Then(/^the user should see the search bar/, confirmMultipleTextVisibility);

When(/^the user clicks on '(.*)' .*$/, click);

When ('the user enters {string} into the {string} field', enterInput);

Then(/^the user should see '(.*)' .*$/, confirmTextVisibility);
