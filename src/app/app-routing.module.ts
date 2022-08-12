import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'bookList', component:BookComponent},
  { path: 'book/:id', component: BookDetailsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // {
  //   path: 'products',
  //   //loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  // },
  // {
  //   path: 'orders',
  //  // loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  // },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
