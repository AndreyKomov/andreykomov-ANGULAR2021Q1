import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  emitCart = new EventEmitter();

  cartProduct: any = [];
  totalQuantity = 0;
  totalSum = 0;

  addBook(book: any): any {
    const targetBook = this.cartProduct.find((el: any) => el.name === book.name);
    if (targetBook) {
      targetBook.quantity++;
    } else {
      book.quantity = 1;
      this.cartProduct.push(book);
    }
    this.emitCart.emit(this.cartProduct);
    this.totalQuantity++;
  }

  removeBook(book: any): any {
    this.cartProduct = this.cartProduct.filter((el: any) => el.name !== book.name);
    this.totalQuantity--;
  }

  increaseQuantity(book: any): any {
    book.quantity++;
    this.totalQuantity++;
  }

  decreaseQuantity(book: any): any {
    book.quantity--;
    this.totalQuantity--;
  }

  updateCartData(): any {

  }
}
