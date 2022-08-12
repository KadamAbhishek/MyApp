import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'bookList', component:BookComponent},
  { path: 'book/:id', component: BookDetailsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
   {path: 'products', component:LoginComponent},
  {path: 'orders', component: RegisterComponent},
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
