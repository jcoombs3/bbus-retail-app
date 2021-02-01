import { HorizontalMenuBasePageObject } from '../page-objects/horizontal-menu-base-page-object';
import { ManageCardBasePageObject } from '../page-objects/manage-cards-base-page-object';
import testData from '../data/testing.data';

import { BrowserHelper } from '@backbase/lib-test-widget';

const browserHelper = new BrowserHelper();
const horizontalMenuBasePageObject = new HorizontalMenuBasePageObject();
const manageCardBasePageObject = new ManageCardBasePageObject();

describe('Manage cards End-to-End Journey', (): void => {
  beforeAll(
    async (): Promise<void> => {
      await browserHelper.setLocalStorageItem('enableMocks', 'true');
    },
  );

  it('Card activation User Journey', async (): Promise<void> => {
    await horizontalMenuBasePageObject.navigateToPage('Self service');
    await horizontalMenuBasePageObject.navigateToPageInDropdown('Manage cards');

    await manageCardBasePageObject.clickPaymentCard();
    await manageCardBasePageObject.clickActivateButton();
    await manageCardBasePageObject.typeCvvCode(testData.cvv);
    await manageCardBasePageObject.clickActivateConfirm();
  });
});
