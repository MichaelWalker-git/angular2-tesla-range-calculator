import { SwensonHePage } from './app.po';

describe('swenson-he App', function() {
  let page: SwensonHePage;

  beforeEach(() => {
    page = new SwensonHePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
