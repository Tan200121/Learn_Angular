import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterContentComponent } from './components/footer/components/footer-content/footer-content.component';
import { FooterLegalComponent } from './components/footer/components/footer-legal/footer-legal.component';
import { ContactComponent } from './components/main/components/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    FooterContentComponent,
    FooterLegalComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
