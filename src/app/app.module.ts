import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyMaterialModule} from './material.module';
import { RouterModule, Routes} from '@angular/router';
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    RegistrationComponentComponent,
    LoginComponentComponent,
    
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    RouterModule.forRoot([
      
      { path: 'register', component: RegistrationComponentComponent },
      { path: 'login', component: LoginComponentComponent },
      { path: '', redirectTo: '/', pathMatch: 'full' }
    ])
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
