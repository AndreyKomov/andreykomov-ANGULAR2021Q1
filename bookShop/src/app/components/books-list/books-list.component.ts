import { Component, OnInit, } from '@angular/core';
import { BookModel } from 'src/app/models/BookModel';
import { BooksService } from 'src/app/services/books.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  constructor(
    public booksServ: BooksService,
    public cartServ: CartService
    ) {}

  booksListForApp: BookModel[] = [];

  ngOnInit(): void {
  }

  putBookToCart(book: any) {
    this.cartServ.addBook(book);
  }
}
