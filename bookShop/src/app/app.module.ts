import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { AboutComponent } from './layout/components/about/about.component';
import { CartModule } from './cart/cart.module';
import { SharedModule } from './shared/shared.module';
import { BooksModule } from './books/books.module';

@NgModule({
  declarations: [
    AppComponent,
    CartListComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CartModule,
    SharedModule,
    BooksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
