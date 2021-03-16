import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { AboutComponent } from './layout/components/about/about.component';
import { CartModule } from './cart/cart.module';
import { SharedModule } from './shared/shared.module';
import { BooksModule } from './books/books.module';
import { AdminComponent } from './components/admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { IsAdminComponent } from './components/is-admin/is-admin.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './cart.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CartListComponent,
    AboutComponent,
    AdminComponent,
    IsAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CartModule,
    SharedModule,
    BooksModule,
    HttpClientModule,
    StoreModule.forRoot({ cart: cartReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
