import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { CartService } from 'src/app/services/cart/cart.service';
import { plusDollar } from 'src/app/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  cart$: Observable<any>;

  constructor(
    public cartServ: CartService,
    public router: Router,
    private store: Store<{ cart: any[] }>
  ) {
    this.cart$ = store.select('cart');
    this.cart$.subscribe(
      currentCart => console.log(currentCart)
    );
  }

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
    this.plusDollar();
  }

  plusDollar() {
    this.store.dispatch(plusDollar());
  }

}
