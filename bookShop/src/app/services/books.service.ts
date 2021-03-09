import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BooksCategories } from '../models/BookModel';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  booksArray: any = [{
    name: 'John Vayne',
    description: 'The story about John Vayne',
    price: 10,
    category: BooksCategories.Western,
    createDate: 1850,
    isAvailable: true,
    id: 1,
  },
  {
    name: 'Frodo Bagins',
    description: 'The story about Frodo Bagins',
    price: 50,
    category: BooksCategories.Fantasy,
    createDate: 2020,
    isAvailable: false,
    id: 2,
  },
  {
    name: 'Magic in Grons',
    description: 'The story about small lion',
    price: 100,
    category: BooksCategories.Fantasy,
    createDate: 2020,
    isAvailable: true,
    id: 3,
  },
  {
    name: 'I shot the sheriff',
    description: 'The story about Bob Marley',
    price: 50,
    category: BooksCategories.Fantasy,
    createDate: 2020,
    isAvailable: true,
    id: 4,
  },
  {
    name: 'Small ice',
    description: 'The story about magic ice',
    price: 100,
    category: BooksCategories.Fantasy,
    createDate: 2020,
    isAvailable: true,
    id: 5,
  },
  ];

  getBooks(): any {
    return new Observable<any>(observer => {
      observer.next(this.booksArray);
    });
    // return this.booksArray;
  }

  getBookById(id: number): any {
    return this.booksArray.find((el: any) => el.id === id);
  }
}
