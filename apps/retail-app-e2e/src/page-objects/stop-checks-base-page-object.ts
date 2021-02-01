import { BasePage } from '@backbase/lib-test-widget';
import locators from '../locators/stop-checks-base.locators';

export class StopChecksBasePageObject extends BasePage {
  constructor() {
    super('');
  }

  public clickCreate() {
    return this.click(locators.createButton);
  }

  public clickAccountSelector() {
    return this.click(locators.accountSelector);
  }

  public chooseAccount() {
    return this.click(locators.account);
  }

  public typeCheckNumber(checkNumber: string) {
    return this.type(locators.checkNumber, checkNumber);
  }

  public clickContinue() {
    return this.click(locators.continueButton);
  }

  public clickSubmit() {
    return this.click(locators.submitButton);
  }
}
