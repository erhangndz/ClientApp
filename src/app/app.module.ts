import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {  provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { MemberListComponent } from './member-list/member-list.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './_guards/auth-guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    ProductFormComponent,
    ProductDetailsComponent,
    RegisterComponent,
    MemberListComponent,
    FriendListComponent,
    HomeComponent,
    MessagesComponent,
    NotfoundComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,



  ],
  providers: [provideHttpClient(withInterceptorsFromDi()),
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
