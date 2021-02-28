import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() bookForCartItem: any;
  @Output() deletedBook = new EventEmitter();

  ngOnInit(): void {
  }

  plusBook() {
    this.bookForCartItem.quantity++;
  }

  minusBook() {
    if (this.bookForCartItem.quantity === 1) {
      this.deletedBook.emit(this.bookForCartItem);
    } else {
      this.bookForCartItem.quantity--;
    }
  }
}
