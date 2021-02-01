import { BasePage } from '@backbase/lib-test-widget';
import locators from '../locators/my-profile-base.locators';

export class ProfileBasePageObject extends BasePage {
  constructor() {
    super('');
  }

  public clickAddEmail() {
    return this.click(locators.addEmailButton);
  }

  public typeEmail(email: string) {
    return this.type(locators.emailInput, email);
  }

  public clickSubmitEmail() {
    return this.click(locators.saveEmailButton);
  }

  public clickAddPhoneNumber() {
    return this.waitUntilEnabled(locators.addPhoneNumber, 2000).then(() => this.click(locators.addPhoneNumber));
  }

  public typePhoneNumber(phoneNumber: string) {
    return this.type(locators.phoneNumberInput, phoneNumber);
  }

  public clickSubmitPhoneNumber() {
    // TODO: investigate why the page jumps to the top after the first click and only reacts for the second one
    this.click(locators.savePhoneNumber);
    return this.click(locators.savePhoneNumber);
  }

  public clickAddAddress() {
    return this.waitUntilEnabled(locators.addAddress, 2000).then(() => this.click(locators.addAddress));
  }

  public typeAddress(address: string) {
    return this.type(locators.addressInput, address);
  }

  public typeCity(city: string) {
    return this.type(locators.cityInput, city);
  }

  public typeState(state: string) {
    return this.type(locators.stateInput, state);
  }

  public typePostCode(postCode: string) {
    return this.type(locators.postCodeInput, postCode);
  }

  public clickSubmitAddress() {
    return this.click(locators.saveAddressButton);
  }
}
