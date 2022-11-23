import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, } from '@angular/forms';
import { LoginComponentsComponent } from './components/partials/login-components/login-components.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlldataComponent } from './components/partials/alldata/alldata.component';
import { CompsComponent } from './components/pages/comps/comps.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponentsComponent,
    SignUpComponent,
    AlldataComponent,
    CompsComponent,
  ],
  entryComponents: [LoginComponentsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
