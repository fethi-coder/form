import { NgModule } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistrerComponent } from './registrer/registrer.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,RegistrerComponent]
})
export class AppModule { }
