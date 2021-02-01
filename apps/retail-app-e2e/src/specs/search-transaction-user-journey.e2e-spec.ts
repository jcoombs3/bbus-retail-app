import { HorizontalMenuBasePageObject } from '../page-objects/horizontal-menu-base-page-object';
import { ProductSummaryBasePageObject } from '../page-objects/product-summary-base-page-object';
import testData from '../data/testing.data';

import { BrowserHelper } from '@backbase/lib-test-widget';
import { TransactionBasePageObject } from '../page-objects/transaction-base-page-object';

const browserHelper = new BrowserHelper();
const horizontalMenuBasePageObject = new HorizontalMenuBasePageObject();
const productSummaryBasePageObject = new ProductSummaryBasePageObject();
const transactionBasePageObject = new TransactionBasePageObject();

describe('Search Transaction User Journey', (): void => {
  beforeAll(
    async (): Promise<void> => {
      await browserHelper.setLocalStorageItem('enableMocks', 'true');
    },
  );

  it('Search Transaction List', async (): Promise<void> => {
    await horizontalMenuBasePageObject.navigateToPage('My accounts');

    await productSummaryBasePageObject.clickOnAccountCard();
    await transactionBasePageObject.searchForTransaction(testData.transactionTitle);
    await transactionBasePageObject.clickOnSearchButton();

    expect(await transactionBasePageObject.isTransactionsListDisplayed()).toBe(true);
  });
});
