import { BasePage } from '@backbase/lib-test-widget';
import locators from '../locators/transfer-base.locators';

export class TransferBasePageObject extends BasePage {
  constructor() {
    super('');
  }

  public clickOnTransferAccount() {
    return this.findAllElements(locators.transferAccount).get(3).click();
  }

  public clickOnToAccountButton() {
    return this.findAllElements(locators.toAccount).get(1).click();
  }

  public waitUntilAccountIsLoaded() {
    return this.waitUntilEnabled(locators.toAccount, 5000);
  }

  waitUntilAccountSelectorIsLoaded() {
    return this.waitUntilEnabled(locators.multipleAccountSelector, 5000);
  }

  public updateAmount(amountValue: string) {
    return this.type(locators.amount, amountValue);
  }

  public clickContinue() {
    return this.click(locators.continueButton);
  }

  public clickSubmit() {
    return this.click(locators.submit);
  }

  public clickTransfer() {
    return this.click(locators.payment);
  }

  public clickCancelPayment() {
    return this.click(locators.cancelPaymentButton);
  }

  public clickCancelPaymentConfirm() {
    return this.click(locators.confirmCancel);
  }
}
