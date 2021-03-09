import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  constructor(public cartServ: CartService, public router: Router) { }

  subscript: Subscription;
  ngOnInit(): void {
    this.subscript = this.cartServ.emitCart.subscribe(cart => {      // for passing from cartService
      console.log(cart);
    });
  }

  goBackToBooksList() {
    this.router.navigate(['product-list']);
  }

  ngOnDestroy() {
    this.subscript.unsubscribe();    // for unsubscribe;
  }

  deleteBookFromArray(book: any) {
    this.cartServ.removeBook(book);
  }

  goToOrderPage() {
    this.router.navigate(['order']);
  }

}
