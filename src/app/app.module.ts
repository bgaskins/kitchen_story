import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { AddRemoveComponent } from './add-remove/add-remove.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent,
    HomeComponent,
    SearchComponent,
    OrderDetailsComponent,
    AddRemoveComponent,
    ConfirmationComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
