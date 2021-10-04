import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './Components/footer/footer.component';
import { AdboutusComponent } from './Components/adboutus/adboutus.component';
import { HowtouseComponent } from './Components/howtouse/howtouse.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { FaqComponent } from './Components/faq/faq.component';
import { MaterialModule } from './material';
import { PrivacypolicyComponent } from './Components/privacypolicy/privacypolicy.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AdboutusComponent,
    HowtouseComponent,
    ContactusComponent,
    FaqComponent,
    PrivacypolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
