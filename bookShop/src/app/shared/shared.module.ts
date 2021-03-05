import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersModule } from '../orders/orders.module';
import { ChangeFontDirective } from './directives/change-font.directive';



@NgModule({
  declarations: [ChangeFontDirective],
  imports: [
    CommonModule,
    OrdersModule
  ],
  exports: [
    CommonModule,
    OrdersModule,
    ChangeFontDirective
  ]
})
export class SharedModule { }
