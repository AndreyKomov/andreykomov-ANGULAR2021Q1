import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  emitCart = new EventEmitter();
  updatingData = new EventEmitter();

  cartProduct: any = [];
  totalQuantity = 0;
  totalSum = 0;

  addBook(book: any): any {
    const targetBook = this.cartProduct.find((el: any) => el.name === book.name);
    if (targetBook) {
      targetBook.quantity++;
      this.totalSum += book.price;
    } else {
      book.quantity = 1;
      this.totalSum += book.price;
      this.cartProduct.push(book);
    }
    this.emitCart.emit(this.cartProduct);
    this.totalQuantity++;
  }

  removeBook(book: any): any {
    this.cartProduct = this.cartProduct.filter((el: any) => el.name !== book.name);
    this.totalSum -= book.price;
    this.totalQuantity--;
  }

  increaseQuantity(book: any): any {
    book.quantity++;
    this.totalSum += book.price;
    this.totalQuantity++;
    this.updateCartData();
  }

  decreaseQuantity(book: any): any {
    book.quantity--;
    this.totalSum -= book.price;
    this.totalQuantity--;
  }

  updateCartData(): any {
    this.updatingData.emit({
      totalQuantity: this.totalQuantity,
      totalSum: this.totalSum
    });
  }
}
