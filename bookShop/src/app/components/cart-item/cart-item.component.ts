import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  constructor(public cartServ: CartService) { }

  @Input() bookForCartItem: any;
  @Output() deletedBook = new EventEmitter();

  ngOnInit(): void {
  }

  plusBook(): void {
    this.cartServ.increaseQuantity(this.bookForCartItem);
  }

  minusBook() {
    if (this.bookForCartItem.quantity === 1) {
      this.cartServ.removeBook(this.bookForCartItem);
    } else {
      this.cartServ.decreaseQuantity(this.bookForCartItem);
    }
  }
}
