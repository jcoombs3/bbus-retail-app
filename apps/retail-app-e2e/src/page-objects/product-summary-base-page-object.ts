import { BasePage } from '@backbase/lib-test-widget';
import locators from '../locators/account-selector-base.locators';

export class ProductSummaryBasePageObject extends BasePage {
  constructor() {
    super('');
  }

  clickOnAccountSelector() {
    return this.click(locators.multipleAccountSelector);
  }

  clickOnAccountCard() {
    return this.click(locators.accountCard);
  }

  waitUntilCardVisible() {
    return this.waitUntilVisible(locators.accountCard, 2000);
  }

  selectFirstAccount() {
    return this.click(locators.firstAccountOption);
  }

  waitUntilAccountSelectorIsLoaded() {
    return this.waitUntilEnabled(locators.multipleAccountSelector, 2000);
  }

  waitUntilAccountCardIsLoaded() {
    return this.waitUntilEnabled(locators.accountCard, 2000);
  }
}
