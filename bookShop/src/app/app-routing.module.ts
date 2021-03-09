import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { CartComponent } from './components/cart/cart.component';
import { IsAdminComponent } from './components/is-admin/is-admin.component';
import { OrderComponent } from './components/order/order.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {path: '', redirectTo: 'product-list', pathMatch: 'full'},
  {path: 'product-list', component: BooksListComponent},
  {path: 'product/:productID', component: BookCardComponent},
  {path: 'cart', component: CartComponent},
  {path: 'order', component: OrderComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AdminGuard]},
  {path: 'isAdmin', component: IsAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
