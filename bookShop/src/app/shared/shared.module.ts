import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersModule } from '../orders/orders.module';
import { ChangeFontDirective } from './directives/change-font.directive';
import { OrderByPipe } from './pipes/order-by.pipe';



@NgModule({
  declarations: [ChangeFontDirective, OrderByPipe],
  imports: [
    CommonModule,
    OrdersModule
  ],
  exports: [
    CommonModule,
    OrdersModule,
    ChangeFontDirective,
    OrderByPipe
  ]
})
export class SharedModule { }
