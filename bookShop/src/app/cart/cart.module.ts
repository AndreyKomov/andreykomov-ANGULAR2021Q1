import { NgModule } from '@angular/core';
import { CartComponent } from '../components/cart/cart.component';
import { CartItemComponent } from '../components/cart-item/cart-item.component';
import { SharedModule } from '../shared/shared.module';
import { ChangeBgDirective } from './directives/change-bg.directive';



@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent,
    ChangeBgDirective,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
