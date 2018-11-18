import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StorageServiceModule } from 'angular-webstorage-service';
import { NgxPayPalModule } from 'ngx-paypal';
import { RouterModule, Routes } from '@angular/router';

import { RestService } from './services/rest.service';
import { BookService } from './services/book.service';
import { CategoryService } from './services/category.service';
import { CustomerService } from './services/customer.service';
import { AuthService } from './services/auth.service';
import { CartService } from './services/cart.service';
import { OrderService } from './services/order.service';
import { AddressService } from './services/address.service';
import { SessionService } from './services/session.service';

import { AppComponent } from './app.component';
import { CategorySelectorComponent } from './components/category-selector/category-selector.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { CustomerEditorComponent } from './components/customer-editor/customer-editor.component';
import { AddressEditorComponent } from './components/address-editor/address-editor.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BannerComponent } from './components/banner/banner.component';
import { CustomerLoggerComponent } from './components/customer-logger/customer-logger.component';
import { AccountBarComponent } from './components/account-bar/account-bar.component';
import { AccountMenuComponent } from './components/account-menu/account-menu.component';
import { AccountOrderComponent } from './components/account-order/account-order.component';
import { CartAddComponent } from './components/cart-add/cart-add.component';
import { CartComponent } from './components/cart/cart.component';
import { AccountAddressComponent } from './components/account-address/account-address.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ValidationComponent } from './components/validation/validation.component';

const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'signup', component: CustomerEditorComponent },
  { path: 'signin', component: CustomerLoggerComponent },
  { path: 'account', component: AccountMenuComponent },
  { path: 'account/infos', component: CustomerEditorComponent },
  { path: 'account/orders', component: AccountOrderComponent },
  { path: 'account/addresses', component: AccountAddressComponent },
  { path: 'account/addresses/new', component: AddressEditorComponent },
  { path: 'books', component: BookListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'validation', component: ValidationComponent },
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CategorySelectorComponent,
    NavBarComponent,
    BookListComponent,
    CustomerEditorComponent,
    AddressEditorComponent,
    SearchBarComponent,
    BannerComponent,
    CustomerLoggerComponent,
    AccountBarComponent,
    AccountMenuComponent,
    AccountOrderComponent,
    CartAddComponent,
    CartComponent,
    AccountAddressComponent,
    CheckoutComponent,
    ValidationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StorageServiceModule,
    NgxPayPalModule,
  ],
  providers: [
    RestService,
    BookService,
    CategoryService,
    CustomerService,
    AuthService,
    CartService,
    OrderService,
    AddressService,
    SessionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
