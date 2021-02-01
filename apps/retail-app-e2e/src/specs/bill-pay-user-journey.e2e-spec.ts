import { HorizontalMenuBasePageObject } from '../page-objects/horizontal-menu-base-page-object';
import { BillPayBasePageObject } from '../page-objects/bill-pay-base-page-object';
import testData from '../data/testing.data';

import { BrowserHelper } from '@backbase/lib-test-widget';

const browserHelper = new BrowserHelper();
const horizontalMenuBasePageObject = new HorizontalMenuBasePageObject();
const billPayBasePageObject = new BillPayBasePageObject();

describe('Bill Pay End-to-End User Journey', (): void => {
  beforeAll(
    async (): Promise<void> => {
      await browserHelper.setLocalStorageItem('enableMocks', 'true');
    },
  );

  it('Bill Pay Journey pay a bill', async (): Promise<void> => {
    await horizontalMenuBasePageObject.navigateToPage('Bill pay');

    await horizontalMenuBasePageObject.navigateToPageInDropdown('Pay a bill');

    await billPayBasePageObject.clickPay();
    await billPayBasePageObject.waitUntilContinueIsVisible();
    await billPayBasePageObject.updatePaymentAmount(testData.amount);
    await billPayBasePageObject.clickContinuePayment();
    await billPayBasePageObject.waitUntilConfirmIsVisible();
    await billPayBasePageObject.clickConfirmPayment();
  });

  it('Bill Pay Journey pending payments list', async (): Promise<void> => {
    await horizontalMenuBasePageObject.navigateToPage('Bill pay');

    await horizontalMenuBasePageObject.navigateToPageInDropdown('Pending payments');

    await billPayBasePageObject.waitUntilPaymentIsDisplayed();
    expect(await billPayBasePageObject.isPendingPaymentDisplayed()).toBe(true);
  });

  it('Bill Pay Journey history payments list', async (): Promise<void> => {
    await horizontalMenuBasePageObject.navigateToPage('Bill pay');

    await horizontalMenuBasePageObject.navigateToPageInDropdown('History payments');

    await billPayBasePageObject.waitUntilPaymentIsDisplayed();
    expect(await billPayBasePageObject.isPendingPaymentDisplayed()).toBe(true);
  });
});
