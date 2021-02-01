import { BasePage } from '@backbase/lib-test-widget';
import locators from '../locators/authorized-users-base.locators';

export class AuthorizedUserBasePageObject extends BasePage {
  constructor() {
    super('');
  }

  public clickAddUser() {
    return this.click(locators.addUserButton);
  }

  public waitUntilRedirect() {
    return this.waitUntilVisible(locators.firstName, 2000);
  }

  public typeFirstName(firstName: string) {
    return this.type(locators.firstName, firstName);
  }

  public typeLastName(lastName: string) {
    return this.type(locators.lastName, lastName);
  }

  public typeEmail(email: string) {
    return this.type(locators.email, email);
  }

  public typeConfirmEmail(email: string) {
    return this.type(locators.confirmEmail, email);
  }

  public typePhoneNumber(phoneNumber: string) {
    return this.type(locators.phoneNumber, phoneNumber);
  }

  public clickDetailsContinueButton() {
    return this.click(locators.detailsContinueButton);
  }

  public selectAccount() {
    return this.click(locators.selectAccountCheckbox);
  }

  public clickAccountContinueButton() {
    return this.click(locators.accountContinueButton);
  }

  public clickPermissionContinueButton() {
    return this.click(locators.permissionContinueButton);
  }

  public clickTermsCheckbox() {
    return this.click(locators.termsCheckbox);
  }

  public clickConfirmButton() {
    return this.click(locators.confirmButton);
  }

  public isSuccessModalPresent() {
    return this.isPresent(locators.successModal);
  }
}
