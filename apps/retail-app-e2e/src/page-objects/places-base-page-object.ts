import { BasePage } from '@backbase/lib-test-widget';
import locators from '../locators/places-base.locators';

export class PlacesBasePageObject extends BasePage {
  constructor() {
    super('');
  }

  public isWidgetPresent() {
    return this.isPresent(locators.placesWidget);
  }

  public isSearchBoxPresent() {
    return this.isPresent(locators.mapSearch);
  }

  public isPlacesListPresent() {
    return this.isPresent(locators.placesList);
  }

  public isPlacesMapPresent() {
    return this.isPresent(locators.map);
  }
}
