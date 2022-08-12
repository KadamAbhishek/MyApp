import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book/Book';
import { BookService } from '../book/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  books!: Book[];
  errorMessage: string='';
  bookId : number=0;
  chosenBook!: Book;

  constructor(private bookService : BookService, private route : ActivatedRoute) { }
  getBook(){
    this.bookService.getBooks().subscribe(
      ibooks =>{
        this.books =ibooks; console.log(this.books);
        this.route.params.subscribe(param => this.bookId = param['id']);
        this.getBookDetails(this.bookId);
      },
    error => console.log(error));
  }
  getBookDetails(bookId:number) {
    for (const iterator of this.books) {
      if (iterator.id == bookId) {
        this.chosenBook = iterator;
      }
    }
  }

  ngOnInit(): void {
  }

}
