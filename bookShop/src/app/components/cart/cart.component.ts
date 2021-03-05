import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  constructor(public cartServ: CartService) { }

  subscript: Subscription;
  ngOnInit(): void {
    this.subscript = this.cartServ.emitCart.subscribe(cart => {      // for passing from cartService
      console.log(cart);
    });
  }

  deleteBookFromArray(book: any) {
    this.cartServ.removeBook(book);
  }

  ngOnDestroy() {
    this.subscript.unsubscribe();    // for unsubscribe;
  }

}
