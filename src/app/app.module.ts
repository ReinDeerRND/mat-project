import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InfoComponent } from './components/info/info.component';
import { UsersComponent } from './components/users/users.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './shared/material.module';
import { PagesComponent } from './components/pages/pages.component';
import { SecondPageComponent } from './components/second-page/second-page.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { ThirdPageComponent } from './components/third-page/third-page.component';
import { SharedModule } from './shared/shared.module';
import { TreeSelectComponent } from './components/tree-select/tree-select.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    UsersComponent,
    HeaderComponent,
    PagesComponent,
    SecondPageComponent,
    FirstPageComponent,
    ThirdPageComponent,
    TreeSelectComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule, 
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
