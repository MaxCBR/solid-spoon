import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/models/Content';
import { TabContentService } from 'src/app/services/tab-content.service';

@Component({
  selector: 'app-goal2',
  templateUrl: './goal2.component.html',
  styleUrls: ['./goal2.component.css'],
})
export class Goal2Component implements OnInit {
  activeIndex: number = 0;
  contents: Content[] = [];
  constructor(private tabContentService: TabContentService) {}

  ngOnInit(): void {
    //populate contents list from service
    this.contents = this.tabContentService.getContents();
  }

  updateActiveIndex(index: number) {
    this.activeIndex = index;
  }
}
