import { AngularcodereviewPage } from './app.po';

describe('angularcodereview App', () => {
  let page: AngularcodereviewPage;

  beforeEach(() => {
    page = new AngularcodereviewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
