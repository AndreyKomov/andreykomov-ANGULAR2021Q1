import { Component, OnInit, } from '@angular/core';
import { BackendService } from 'src/app/backend.service';
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
    public cartServ: CartService,
    public httpServ: BackendService
    ) {}

  booksListForApp: BookModel[] = [];
  tr: any = [];

  ngOnInit(): void {
    this.httpServ.getData().subscribe(response => {
      console.log(this.tr);
      this.tr = response;
    });
  }

  putBookToCart(book: any) {
    this.cartServ.addBook(book);
  }
}
