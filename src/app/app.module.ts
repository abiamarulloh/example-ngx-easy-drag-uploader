import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxEasyDragUploaderModule } from 'ngx-easy-drag-uploader';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxEasyDragUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
