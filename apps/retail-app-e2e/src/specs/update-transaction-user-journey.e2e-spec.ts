import { HorizontalMenuBasePageObject } from '../page-objects/horizontal-menu-base-page-object';
import { ProductSummaryBasePageObject } from '../page-objects/product-summary-base-page-object';
import { BrowserHelper } from '@backbase/lib-test-widget';
import { browser } from 'protractor';
import { TransactionBasePageObject } from '../page-objects/transaction-base-page-object';

const browserHelper = new BrowserHelper();
const horizontalMenuBasePageObject = new HorizontalMenuBasePageObject();
const productSummaryBasePageObject = new ProductSummaryBasePageObject();
const transactionBasePageObject = new TransactionBasePageObject();

describe('Update Transaction User Journey', (): void => {
  beforeAll(
    async (): Promise<void> => {
      await browserHelper.setLocalStorageItem('enableMocks', 'true');
    },
  );

  it('Update Transaction Category', async (): Promise<void> => {
    await horizontalMenuBasePageObject.navigateToPage('My accounts');
    await productSummaryBasePageObject.clickOnAccountCard();
    await transactionBasePageObject.selectFirstTransaction();

    expect(await transactionBasePageObject.isTransactionDetailsDisplayed()).toBe(true);
    await transactionBasePageObject.clickOnUpdateCategoryButton();

    expect(await transactionBasePageObject.isCategoriesWindowDisplayed()).toBe(true);
    await transactionBasePageObject.selectFirstCategory();
    await transactionBasePageObject.clickOnSaveCategoryButton();
  });
});
