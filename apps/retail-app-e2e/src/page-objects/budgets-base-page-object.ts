import { BasePage } from '@backbase/lib-test-widget';
import locators from '../locators/budgets-base.locators';

export class BudgetsBasePageObject extends BasePage {
  constructor() {
    super('');
  }

  public clickOnCreateBudgetButton() {
    return this.click(locators.newBudgetButton);
  }

  public waitUntilCreateBudgetButton() {
    return this.waitUntilVisible(locators.newBudgetButton, 2000);
  }

  public waitUntilModelIsVisible() {
    return this.waitUntilVisible(locators.selectBudgetModel, 2000);
  }

  public selectOption() {
    return this.click(locators.option);
  }

  public clickOnContinue() {
    return this.click(locators.continueButton);
  }

  public waitUntilAmountIsVisible() {
    return this.waitUntilVisible(locators.amountInput, 2000);
  }

  public enterAmount(amount: string) {
    return this.type(locators.amountInput, amount);
  }
}
