import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getBannerText(): Promise<string> {
    return element(by.css('.heading')).getText() as Promise<string>;
  }

  getLabelTextById(id: string) {
    return element(by.css(id)).getText() as Promise<string>;
  }

}
