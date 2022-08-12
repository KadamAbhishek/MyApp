import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './Book';


@Injectable({
  providedIn: 'root',
})
export class BookService {
  private booksUrl = './assets/books.json';    //./assets/books.json or  http://localhost:3000/booksAPI/books
  constructor(private http: HttpClient) { }
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(
      this.booksUrl 
    );
  }
}
