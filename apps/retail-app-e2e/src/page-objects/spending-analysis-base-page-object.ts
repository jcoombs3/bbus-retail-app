import { BasePage } from '@backbase/lib-test-widget';
import locators from '../locators/spending-analysis-base.locators';

export class SpendingAnalysisBasePageObject extends BasePage {
  constructor() {
    super('');
  }

  public isChartDisplayed() {
    return this.isDisplayed(locators.chart);
  }
}
