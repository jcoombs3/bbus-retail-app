import { BasePage } from '@backbase/lib-test-widget';
import locators from '../locators/transaction-base.locators';

export class TransactionBasePageObject extends BasePage {
  constructor() {
    super('/transactions');
  }

  public waitUntilTransactionControlsIsDisplayed() {
    return this.waitUntilVisible(locators.filterButton, 2000);
  }

  public waitUntilTransactionsListIsLoaded() {
    return this.waitUntilVisible(locators.loadingImage, 2000);
  }

  public isTransactionDetailsDisplayed() {
    return this.isDisplayed(locators.transactionDetails);
  }

  public isCategoriesWindowDisplayed() {
    return this.isDisplayed(locators.categoriesWindow);
  }

  public isTransactionsListDisplayed() {
    return this.isPresent(locators.transactionItem);
  }

  public selectFirstTransaction() {
    return this.click(locators.transactionItem);
  }

  public waitUntilTransactionIsLoaded() {
    return this.waitUntilVisible(locators.transactionItem, 2000);
  }

  public selectFirstCategory() {
    return this.click(locators.homeCategoryInput);
  }

  public clickOnUpdateCategoryButton() {
    return this.click(locators.updateCategoryButton);
  }

  public clickOnSaveCategoryButton() {
    return this.click(locators.saveCategoryButton);
  }

  public clickOnSearchButton() {
    return this.click(locators.searchButton);
  }

  public searchForTransaction(searchValue: string) {
    return this.type(locators.searchInput, searchValue);
  }
}
