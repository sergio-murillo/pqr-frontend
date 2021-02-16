import { browser, by, element, WebElementPromise } from 'protractor';
export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }
  getBackgroundHeader(): Promise<string> {
    return element(by.css('app-root app-header .header')).getCssValue('background-color') as Promise<
    string
    >;
  }
}
