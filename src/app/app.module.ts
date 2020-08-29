import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiHeaderComponent } from './ui-header/ui-header.component';
import { UiHmenuComponent } from './ui-hmenu/ui-hmenu.component';
import { UiSidebarComponent } from './ui-sidebar/ui-sidebar.component';
import { UiContentAreaComponent } from './ui-content-area/ui-content-area.component';

@NgModule({
  declarations: [AppComponent, UiHeaderComponent, UiHmenuComponent, UiSidebarComponent, UiContentAreaComponent],
  imports: [BrowserModule, ClarityModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
