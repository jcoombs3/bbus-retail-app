import { AppPage } from '../page-objects/app.po';
describe('workspace-project App', () => {
  let page: AppPage;
  beforeEach(() => {
    page = new AppPage();
  });
  it('should be able to run tests', async () => {
    await page.navigateTo();
    expect(page).not.toBeUndefined();
  });
});
