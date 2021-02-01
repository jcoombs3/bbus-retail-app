import { BasePage } from '@backbase/lib-test-widget';
import locators from '../locators/bill-pay-base.locators';

export class BillPayBasePageObject extends BasePage {
  constructor() {
    super('');
  }

  public clickPay() {
    return this.click(locators.payButton);
  }

  public updatePaymentAmount(amount: string) {
    return this.type(locators.paymentAmountInput, amount);
  }

  public clickContinuePayment() {
    return this.click(locators.continuePaymentButton);
  }

  public clickConfirmPayment() {
    return this.click(locators.confirmPaymentButton);
  }

  public waitUntilButtonIsVisible() {
    return this.waitUntilVisible(locators.payButton, 2000);
  }

  public waitUntilContinueIsVisible() {
    return this.waitUntilVisible(locators.continuePaymentButton, 2000);
  }

  public waitUntilConfirmIsVisible() {
    return this.waitUntilVisible(locators.confirmPaymentButton, 2000);
  }

  public waitUntilPaymentIsDisplayed() {
    return this.waitUntilVisible(locators.pendingPaymentList, 2000);
  }

  public isPendingPaymentDisplayed() {
    return this.isDisplayed(locators.pendingPaymentList);
  }
}
