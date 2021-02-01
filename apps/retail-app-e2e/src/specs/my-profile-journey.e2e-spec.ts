import { HorizontalMenuBasePageObject } from '../page-objects/horizontal-menu-base-page-object';
import { ProfileBasePageObject } from '../page-objects/my-profile-base-page-object';
import testData from '../data/testing.data';

import { BrowserHelper } from '@backbase/lib-test-widget';

const browserHelper = new BrowserHelper();
const horizontalMenuBasePageObject = new HorizontalMenuBasePageObject();
const profileBasePageObject = new ProfileBasePageObject();

describe('My profile End-to-End User Journey', (): void => {
  beforeAll(
    async (): Promise<void> => {
      await browserHelper.setLocalStorageItem('enableMocks', 'true');
      await horizontalMenuBasePageObject.navigateToPage('Self service');
      await horizontalMenuBasePageObject.navigateToPageInDropdown('My profile');
    },
  );

  it('Add email Journey', async (): Promise<void> => {
    await profileBasePageObject.clickAddEmail();
    await profileBasePageObject.typeEmail(testData.email);
    await profileBasePageObject.clickSubmitEmail();
  });

  it('Add phone number Journey', async (): Promise<void> => {
    await profileBasePageObject.clickAddPhoneNumber();
    await profileBasePageObject.typePhoneNumber(testData.phoneNumber);
    await profileBasePageObject.clickSubmitPhoneNumber();
  });

  it('Add address Journey', async (): Promise<void> => {
    await profileBasePageObject.clickAddAddress();
    await profileBasePageObject.typeAddress(testData.address);
    await profileBasePageObject.typeCity(testData.city);
    await profileBasePageObject.typeState(testData.city);
    await profileBasePageObject.typePostCode(testData.postCode);
    await profileBasePageObject.clickSubmitAddress();
  });
});
