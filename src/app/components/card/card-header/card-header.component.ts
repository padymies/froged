import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
