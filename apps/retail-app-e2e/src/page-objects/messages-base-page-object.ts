import { BasePage } from '@backbase/lib-test-widget';
import locators from '../locators/messages-base.locators';

export class MessagesBasePageObject extends BasePage {
  constructor() {
    super('');
  }

  public waitUntilComposeButton() {
    return this.waitUntilVisible(locators.composeButton, 2000);
  }

  public clickOnComposeButton() {
    return this.click(locators.composeButton);
  }

  public waitUntilTopicIsVisible() {
    return this.waitUntilVisible(locators.topic, 2000);
  }

  public selectTopic() {
    return this.click(locators.topic);
  }

  public selectOption() {
    this.findAllElements(locators.option).get(2).click();
  }

  public enterSubject(subject: string) {
    return this.type(locators.subject, subject);
  }

  public enterMessage(message: string) {
    return this.type(locators.messageText, message);
  }

  public clickSend() {
    return this.click(locators.sendButton);
  }
}
