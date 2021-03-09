import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(
    public cartServ: CartService,
    public router: Router
    ) { }

  ngOnInit(): void {
  }

  submitOrder() {
    this.cartServ.cartProduct = [];
    this.cartServ.totalQuantity = 0;
    this.cartServ.totalSum = 0;
    this.router.navigate(['product-list']);
  }

}
