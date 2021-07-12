import { CardModule } from './components/card/card.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiButtonComponent } from './components/ui-button/ui-button.component';
import { RippleDirective } from './directives/ripple.directive';
import { GridComponent } from './components/grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    UiButtonComponent,
    RippleDirective,
    GridComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, CardModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
