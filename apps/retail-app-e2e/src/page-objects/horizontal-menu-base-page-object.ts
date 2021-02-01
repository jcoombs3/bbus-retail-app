import { BasePage } from '@backbase/lib-test-widget';
import locators from '../locators/horizontal-menu-base.locators';

export class HorizontalMenuBasePageObject extends BasePage {
  constructor() {
    super('');
  }

  public navigateToPage(page: string) {
    switch (page) {
      case 'My accounts':
        return this.clickInListByText(locators.baseLocator, 'My accounts');
      case 'Analytics':
        return this.clickInListByText(locators.baseLocator, 'Analytics');
      case 'Transfers':
        return this.clickInListByText(locators.baseLocator, 'Transfers');
      case 'Bill pay':
        return this.clickInListByText(locators.baseLocator, 'Bill pay');
      case 'Self service':
        return this.clickInListByText(locators.baseLocator, 'Self service');
      case 'More':
        return this.clickInListByText(locators.baseLocator, 'More');
      default:
        fail('Menu Option not found.');
        return;
    }
  }

  public clickOnNavigationDropdown() {
    return this.click(locators.navigationDropdown);
  }

  public navigateToPageInDropdown(page: string) {
    switch (page) {
      case 'Cash flow':
        return this.clickInListByText(locators.dropdownItem, 'Cash flow');
      case 'Make a transfer':
        return this.clickInListByText(locators.dropdownItem, 'Make a transfer');
      case 'Scheduled transfers':
        return this.clickInListByText(locators.dropdownItem, 'Scheduled transfers');
      case 'Pay a bill':
        return this.clickInListByText(locators.dropdownItem, 'Pay a bill');
      case 'Pending payments':
        return this.clickInListByText(locators.dropdownItem, 'Pending payments');
      case 'History payments':
        return this.clickInListByText(locators.dropdownItem, 'History payments');
      case 'Spending analysis':
        return this.clickInListByText(locators.dropdownItem, 'Spending analysis');
      case 'Income analysis':
        return this.clickInListByText(locators.dropdownItem, 'Income analysis');
      case 'Budgets':
        return this.clickInListByText(locators.dropdownItem, 'Budgets');
      case 'Messages':
        return this.clickInListByText(locators.dropdownItem, 'Messages');
      case 'Find branches and ATMs':
        return this.clickInListByText(locators.dropdownItem, 'Find branches and ATMs');
      case 'My profile':
        return this.clickInListByText(locators.dropdownItem, 'My profile');
      case 'Manage cards':
        return this.clickInListByText(locators.dropdownItem, 'Manage cards');
      case 'Authorized users':
        return this.clickInListByText(locators.dropdownItem, 'Authorized users');
      case 'Stop checks':
        return this.clickInListByText(locators.dropdownItem, 'Stop checks');
      default:
        fail('Menu Option not found.');
        return;
    }
  }
}
