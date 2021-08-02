
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import{MatIconModule}from '@angular/material/icon'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import{ MatBadgeModule}from'@angular/material/badge';
import {MatListModule} from '@angular/material/list';
import{FormsModule, ReactiveFormsModule}from'@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import{HttpClientModule, HTTP_INTERCEPTORS}from'@angular/common/http'
import {MatInputModule} from '@angular/material/input';

import { MatButtonModule} from '@angular/material/button';
import{MatMenuModule}from '@angular/material/menu'



import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatMenuModule,
    MatListModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatSliderModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
