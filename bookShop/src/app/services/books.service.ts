import { Injectable } from '@angular/core';
import { BookModel, BooksCategories } from '../models/BookModel';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  booksArray: BookModel[] = [{
    name: 'John Vayne',
    description: 'The story about John Vayne',
    price: 10,
    category: BooksCategories.Western,
    createDate: 1850,
    isAvailable: true,
  },
  {
    name: 'Frodo Bagins',
    description: 'The story about Frodo Bagins',
    price: 50,
    category: BooksCategories.Fantasy,
    createDate: 2020,
    isAvailable: false,
  },
  {
    name: 'Magic in Grons',
    description: 'The story about small lion',
    price: 100,
    category: BooksCategories.Fantasy,
    createDate: 2020,
    isAvailable: true,
  },
  {
    name: 'I shot the sheriff',
    description: 'The story about Bob Marley',
    price: 50,
    category: BooksCategories.Fantasy,
    createDate: 2020,
    isAvailable: true,
  },
  {
    name: 'Small ice',
    description: 'The story about magic ice',
    price: 100,
    category: BooksCategories.Fantasy,
    createDate: 2020,
    isAvailable: true,
  },
  ];

  getBooks() {
    return this.booksArray;
  }
}
