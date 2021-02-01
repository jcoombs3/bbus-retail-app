import { HorizontalMenuBasePageObject } from '../page-objects/horizontal-menu-base-page-object';
import testData from '../data/testing.data';

import { BrowserHelper } from '@backbase/lib-test-widget';
import { browser } from 'protractor';
import { MessagesBasePageObject } from '../page-objects/messages-base-page-object';

const browserHelper = new BrowserHelper();
const horizontalMenuBasePageObject = new HorizontalMenuBasePageObject();
const messagesBasePageObject = new MessagesBasePageObject();

describe('Messages End-to-End User Journey', (): void => {
  beforeAll(
    async (): Promise<void> => {
      await browserHelper.setLocalStorageItem('enableMocks', 'true');
    },
  );

  it('Create new message journey', async (): Promise<void> => {
    await horizontalMenuBasePageObject.navigateToPage('More');

    await horizontalMenuBasePageObject.navigateToPageInDropdown('Messages');

    await messagesBasePageObject.waitUntilComposeButton();
    await messagesBasePageObject.clickOnComposeButton();

    await messagesBasePageObject.waitUntilTopicIsVisible();
    await messagesBasePageObject.selectTopic();
    await messagesBasePageObject.selectOption();

    await messagesBasePageObject.enterSubject(testData.text);
    await messagesBasePageObject.enterMessage(testData.text);
    await messagesBasePageObject.clickSend();
  });
});
