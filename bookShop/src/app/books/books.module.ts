import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from '../components/book/book.component';
import { BooksListComponent } from '../components/books-list/books-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    BookComponent,
    BooksListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    BooksListComponent
  ]
})
export class BooksModule { }
