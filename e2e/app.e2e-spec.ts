import { NgGenericPage } from './app.po';

describe('ng-generic App', () => {
  let page: NgGenericPage;

  beforeEach(() => {
    page = new NgGenericPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('kl works!');
  });
});
