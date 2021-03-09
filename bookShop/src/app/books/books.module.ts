import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from '../components/book/book.component';
import { BooksListComponent } from '../components/books-list/books-list.component';
import { SharedModule } from '../shared/shared.module';
import { BookCardComponent } from '../components/book-card/book-card.component';



@NgModule({
  declarations: [
    BookComponent,
    BooksListComponent,
    BookCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    BooksListComponent,
    BookCardComponent
  ]
})
export class BooksModule { }
