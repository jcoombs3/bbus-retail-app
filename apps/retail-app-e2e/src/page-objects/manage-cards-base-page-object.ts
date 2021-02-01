import { BasePage } from '@backbase/lib-test-widget';
import locators from '../locators/manage-cards-base.locators';

export class ManageCardBasePageObject extends BasePage {
  constructor() {
    super('');
  }

  public clickPaymentCard() {
    return this.click(locators.paymentCard);
  }

  public clickActivateButton() {
    return this.click(locators.activateButton);
  }

  public typeCvvCode(cvv: string) {
    return this.type(locators.CvvInput, cvv);
  }

  public clickActivateConfirm() {
    return this.click(locators.activateConfirm);
  }
}
