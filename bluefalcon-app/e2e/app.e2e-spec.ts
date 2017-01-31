import { BluefalconAppPage } from './app.po';

describe('bluefalcon-app App', function() {
  let page: BluefalconAppPage;

  beforeEach(() => {
    page = new BluefalconAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
