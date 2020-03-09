import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Country App e2e test suite', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the app header as `Country App`', () => {
    page.navigateTo();
    expect(page.getBannerText()).toEqual('Country App');
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
