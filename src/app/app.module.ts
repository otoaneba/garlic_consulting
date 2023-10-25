import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './view/child-views/menu/menu.component';
import { HomePageComponent } from './view/parent-views/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './view/parent-views/about-us/about-us.component';
import { AboutMeComponent } from './view/child-views/about-me/about-me.component';
import { ContactUsComponent } from './view/parent-views/contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomePageComponent,
    AboutUsComponent,
    AboutMeComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
