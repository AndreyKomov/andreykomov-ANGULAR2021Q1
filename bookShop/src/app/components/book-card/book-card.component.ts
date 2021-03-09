import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  constructor(public route: ActivatedRoute, public bookServ: BooksService) { }

  book: any = {};

  ngOnInit(): void {
    console.log(this.route.snapshot);
    const bookId = this.route.snapshot.params.productID;
    this.book = this.bookServ.getBookById(+bookId);
  }

}
