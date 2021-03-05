import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { AboutComponent } from './layout/components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    CartComponent,
    CartItemComponent,
    BooksListComponent,
    CartListComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
