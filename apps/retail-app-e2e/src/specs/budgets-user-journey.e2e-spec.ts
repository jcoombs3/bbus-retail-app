import { HorizontalMenuBasePageObject } from '../page-objects/horizontal-menu-base-page-object';
import { BudgetsBasePageObject } from '../page-objects/budgets-base-page-object';
import testData from '../data/testing.data';

import { BrowserHelper } from '@backbase/lib-test-widget';
import { browser } from 'protractor';

const browserHelper = new BrowserHelper();
const horizontalMenuBasePageObject = new HorizontalMenuBasePageObject();
const budgetsBasePageObject = new BudgetsBasePageObject();

describe('Budgets End-to-End User Journey', (): void => {
  beforeAll(
    async (): Promise<void> => {
      await browserHelper.setLocalStorageItem('enableMocks', 'true');
    },
  );

  it('Create new budget journey', async (): Promise<void> => {
    await horizontalMenuBasePageObject.navigateToPage('More');

    await horizontalMenuBasePageObject.navigateToPageInDropdown('Budgets');

    await budgetsBasePageObject.waitUntilCreateBudgetButton();
    await budgetsBasePageObject.clickOnCreateBudgetButton();

    await budgetsBasePageObject.waitUntilModelIsVisible();
    await budgetsBasePageObject.selectOption();
    await budgetsBasePageObject.clickOnContinue();

    await budgetsBasePageObject.waitUntilAmountIsVisible();
    await budgetsBasePageObject.enterAmount(testData.amount);
    await budgetsBasePageObject.clickOnContinue();
  });
});
