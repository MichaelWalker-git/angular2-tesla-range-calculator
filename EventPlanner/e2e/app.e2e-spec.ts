import { EventPlannerPage } from './app.po';

describe('event-planner App', function() {
  let page: EventPlannerPage;

  beforeEach(() => {
    page = new EventPlannerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
