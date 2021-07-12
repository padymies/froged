import { CardFooterComponent } from './card-footer/card-footer.component';
import { CardBodyComponent } from './card-body/card-body.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent, UiCardSubtitle, UiCardTitle } from './card.component';
import { CardActionsComponent } from './card-actions/card-actions.component';

@NgModule({
  declarations: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    UiCardTitle,
    UiCardSubtitle,
    CardActionsComponent,
  ],
  imports: [CommonModule],
  exports: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    CardActionsComponent,
    UiCardTitle,
    UiCardSubtitle,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CardModule {}
