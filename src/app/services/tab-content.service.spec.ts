import { TestBed } from '@angular/core/testing';

import { TabContentService } from './tab-content.service';

describe('TabContentService', () => {
  let service: TabContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabContentService);
  });

  it('should get an array with length 5', () => {
    expect(service.getContents()).toHaveSize(5);
  });

  it('randomly picked item should not be empty', () => {
    let regex = new RegExp('\\w+');
    expect(
      regex.test(service.getContents()[Math.floor(Math.random() * 5)].heading)
    ).toBeTrue();
    expect(
      regex.test(service.getContents()[Math.floor(Math.random() * 5)].text)
    ).toBeTrue();
  });
});
