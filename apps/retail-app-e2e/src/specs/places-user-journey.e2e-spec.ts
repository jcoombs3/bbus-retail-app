import { HorizontalMenuBasePageObject } from '../page-objects/horizontal-menu-base-page-object';
import { PlacesBasePageObject } from '../page-objects/places-base-page-object';

import { BrowserHelper } from '@backbase/lib-test-widget';
import { browser } from 'protractor';

const browserHelper = new BrowserHelper();
const horizontalMenuBasePageObject = new HorizontalMenuBasePageObject();
const placesBasePageObject = new PlacesBasePageObject();

describe('Places End-to-End User Journey', (): void => {
  beforeAll(
    async (): Promise<void> => {
      await browser.waitForAngularEnabled(false);
      await browserHelper.setLocalStorageItem('enableMocks', 'true');
    },
  );

  afterAll(
    async (): Promise<void> => {
      await browser.waitForAngularEnabled(true);
    },
  );

  it('Places Journey exists', async (): Promise<void> => {
    await horizontalMenuBasePageObject.navigateToPage('More');
    await horizontalMenuBasePageObject.navigateToPageInDropdown('Find branches and ATMs');

    expect(await placesBasePageObject.isWidgetPresent()).toBe(true);
    expect(await placesBasePageObject.isSearchBoxPresent()).toBe(true);
    expect(await placesBasePageObject.isPlacesListPresent()).toBe(true);
    expect(await placesBasePageObject.isPlacesMapPresent()).toBe(true);

    // Navigate away to stop waiting for the map
    await horizontalMenuBasePageObject.navigateToPage('My accounts');
  });
});
