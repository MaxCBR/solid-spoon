import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combined',
  templateUrl: './combined.component.html',
  styleUrls: ['./combined.component.css'],
})

// Wrapper component to show goal1 and goal2 in parallel
export class CombinedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
