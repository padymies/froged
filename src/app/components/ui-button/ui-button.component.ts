import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss'],
})
export class UiButtonComponent implements OnInit {
  @Input() color: string = '#2519de';
  @Input() disabled: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
