import { A2MFLPage } from './app.po';

describe('a2-mfl App', function() {
  let page: A2MFLPage;

  beforeEach(() => {
    page = new A2MFLPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
