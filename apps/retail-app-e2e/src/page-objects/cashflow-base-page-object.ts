import { BasePage } from '@backbase/lib-test-widget';
import locators from '../locators/cashflow-base.locators';

export class CashflowBasePageObject extends BasePage {
  constructor() {
    super('');
  }

  isBarChartDisplayed() {
    return this.isDisplayed(locators.chartBars);
  }
}
