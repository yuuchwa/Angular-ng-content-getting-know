import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SingleSlotContentComponent } from './single-slot-content/single-slot-content.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SingleSlotContentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
