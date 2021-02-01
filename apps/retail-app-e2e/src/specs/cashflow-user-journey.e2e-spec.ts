import { HorizontalMenuBasePageObject } from '../page-objects/horizontal-menu-base-page-object';
import { ProductSummaryBasePageObject } from '../page-objects/product-summary-base-page-object';

import { BrowserHelper } from '@backbase/lib-test-widget';
import { browser } from 'protractor';
import { CashflowBasePageObject } from '../page-objects/cashflow-base-page-object';

const browserHelper = new BrowserHelper();
const horizontalMenuBasePageObject = new HorizontalMenuBasePageObject();
const productSummaryBasePageObject = new ProductSummaryBasePageObject();
const cashflowBasePageObject = new CashflowBasePageObject();

describe('Cashflow End-to-End User Journey', (): void => {
  beforeAll(
    async (): Promise<void> => {
      await browserHelper.setLocalStorageItem('enableMocks', 'true');
    },
  );

  it('Cashflow Journey Current Account Journey', async (): Promise<void> => {
    await horizontalMenuBasePageObject.navigateToPage('Analytics');

    await horizontalMenuBasePageObject.navigateToPageInDropdown('Cash flow');

    await productSummaryBasePageObject.waitUntilAccountSelectorIsLoaded();

    await productSummaryBasePageObject.clickOnAccountSelector();
    await productSummaryBasePageObject.selectFirstAccount();

    browser.sleep(2000);

    expect(await cashflowBasePageObject.isBarChartDisplayed()).toBe(true);
  });
});
