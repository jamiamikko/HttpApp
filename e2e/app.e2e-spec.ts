import { HtppAppPage } from './app.po';

describe('htpp-app App', function() {
  let page: HtppAppPage;

  beforeEach(() => {
    page = new HtppAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
