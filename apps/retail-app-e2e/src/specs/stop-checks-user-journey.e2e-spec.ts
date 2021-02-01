import { HorizontalMenuBasePageObject } from '../page-objects/horizontal-menu-base-page-object';
import { StopChecksBasePageObject } from '../page-objects/stop-checks-base-page-object';
import testData from '../data/testing.data';

import { BrowserHelper } from '@backbase/lib-test-widget';

const browserHelper = new BrowserHelper();
const horizontalMenuBasePageObject = new HorizontalMenuBasePageObject();
const stopChecksBasePageObject = new StopChecksBasePageObject();

describe('Stop checks End-to-End Journey', (): void => {
  beforeAll(
    async (): Promise<void> => {
      await browserHelper.setLocalStorageItem('enableMocks', 'true');
    },
  );

  it('Create stop check User Journey', async (): Promise<void> => {
    await horizontalMenuBasePageObject.navigateToPage('Self service');
    await horizontalMenuBasePageObject.navigateToPageInDropdown('Stop checks');

    await stopChecksBasePageObject.clickCreate();
    await stopChecksBasePageObject.clickAccountSelector();
    await stopChecksBasePageObject.chooseAccount();
    await stopChecksBasePageObject.typeCheckNumber(testData.checkNumber);
    await stopChecksBasePageObject.clickContinue();
    await stopChecksBasePageObject.clickSubmit();
  });
});
