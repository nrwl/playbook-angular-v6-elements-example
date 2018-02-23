import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CommonUiModule } from './common-ui/common-ui.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
