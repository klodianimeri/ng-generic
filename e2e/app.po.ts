import { browser, element, by } from 'protractor';

export class NgGenericPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('kl-root h1')).getText();
  }
}
