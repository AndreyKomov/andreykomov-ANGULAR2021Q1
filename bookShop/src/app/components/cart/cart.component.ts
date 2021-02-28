import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  @Input() booksForCartComponent: any;
  @Output() cartItemDeletedBook = new EventEmitter();


  ngOnInit(): void {
  }

  deleteBookFromArray(book: any) {
    this.cartItemDeletedBook.emit(book);
  }

}
