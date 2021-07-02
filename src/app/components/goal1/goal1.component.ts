import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/models/Content';
import { TabContentService } from 'src/app/services/tab-content.service';

@Component({
  selector: 'app-goal1',
  templateUrl: './goal1.component.html',
  styleUrls: ['./goal1.component.css'],
})
export class Goal1Component implements OnInit {
  //initial value evaluated from window's initial width
  isWindowSmall: boolean = window.innerWidth < 768;

  //specifying which "accordion-tab" component is "active"
  activeIndex: number = 0;

  // content list can be extracted from DB through a service
  contents: Content[] = [];

  constructor(private tabContentService: TabContentService) {}

  ngOnInit(): void {
    //global event window.onresize()
    window.onresize = () => {
      this.isWindowSmall = window.innerWidth < 768;
    };

    //populate contents list from service
    this.contents = this.tabContentService.getContents();
  }

  //function used to receive child
  onIndexChange(newIndex: number) {
    this.activeIndex = newIndex;
  }
}
