import { HorizontalMenuBasePageObject } from '../page-objects/horizontal-menu-base-page-object';
import { AuthorizedUserBasePageObject } from '../page-objects/authorized-users-base-page-object';
import testData from '../data/testing.data';

import { BrowserHelper } from '@backbase/lib-test-widget';

const browserHelper = new BrowserHelper();
const horizontalMenuBasePageObject = new HorizontalMenuBasePageObject();
const authorizedUserBasePageObject = new AuthorizedUserBasePageObject();

describe('Authorized User End-to-End Journey', (): void => {
  beforeAll(
    async (): Promise<void> => {
      await browserHelper.setLocalStorageItem('enableMocks', 'true');
    },
  );

  it('Add authorized User Journey', async (): Promise<void> => {
    await horizontalMenuBasePageObject.navigateToPage('Self service');
    await horizontalMenuBasePageObject.navigateToPageInDropdown('Authorized users');

    await authorizedUserBasePageObject.clickAddUser();
    await authorizedUserBasePageObject.waitUntilRedirect();
    await authorizedUserBasePageObject.typeFirstName(testData.text);
    await authorizedUserBasePageObject.typeLastName(testData.text);
    await authorizedUserBasePageObject.typeEmail(testData.email);
    await authorizedUserBasePageObject.typeConfirmEmail(testData.email);
    await authorizedUserBasePageObject.typePhoneNumber(testData.phoneNumber);
    await authorizedUserBasePageObject.clickDetailsContinueButton();
    await authorizedUserBasePageObject.selectAccount();
    await authorizedUserBasePageObject.clickAccountContinueButton();
    await authorizedUserBasePageObject.clickPermissionContinueButton();
    await authorizedUserBasePageObject.clickTermsCheckbox();
    await authorizedUserBasePageObject.clickConfirmButton();

    expect(await authorizedUserBasePageObject.isSuccessModalPresent()).toBe(true);
  });
});
