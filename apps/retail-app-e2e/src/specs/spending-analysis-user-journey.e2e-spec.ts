import { HorizontalMenuBasePageObject } from '../page-objects/horizontal-menu-base-page-object';
import { ProductSummaryBasePageObject } from '../page-objects/product-summary-base-page-object';

import { BrowserHelper } from '@backbase/lib-test-widget';
import { browser } from 'protractor';
import { SpendingAnalysisBasePageObject } from '../page-objects/spending-analysis-base-page-object';

const browserHelper = new BrowserHelper();
const horizontalMenuBasePageObject = new HorizontalMenuBasePageObject();
const productSummaryBasePageObject = new ProductSummaryBasePageObject();
const spendingAnalysisBasePageObject = new SpendingAnalysisBasePageObject();

describe('Spending Analysis End-to-End User Journey', (): void => {
  beforeAll(
    async (): Promise<void> => {
      await browserHelper.setLocalStorageItem('enableMocks', 'true');
    },
  );

  it('Spending Analysis overview Journey', async (): Promise<void> => {
    await horizontalMenuBasePageObject.navigateToPage('Analytics');

    await horizontalMenuBasePageObject.navigateToPageInDropdown('Spending analysis');

    await productSummaryBasePageObject.waitUntilAccountSelectorIsLoaded();

    await productSummaryBasePageObject.clickOnAccountSelector();
    await productSummaryBasePageObject.selectFirstAccount();

    browser.sleep(2000);

    expect(await spendingAnalysisBasePageObject.isChartDisplayed()).toBe(true);
  });
});
