import {
  Component,
  Directive,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Directive({
  selector: `ui-card-title, [ui-card-title], [uiCardTitle]`,
  host: {
    class: 'ui-card-title',
  },
})
export class UiCardTitle {
  @Input() align: 'start' | 'center' | 'end' = 'start';
}

@Directive({
  selector: `ui-card-subtitle, [ui-card-subtitle], [uiCardSubTitle]`,
  host: {
    class: 'ui-card-subtitle',
  },
})
export class UiCardSubtitle {}

@Component({
  selector: 'ui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
