import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { BookModel, BooksCategories } from './models/BookModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild ('appTitle') newVar: any;

  title = 'bookShop';
  itemArray: any = [];
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

  putBookToCart(book: any): any {
    let targetBook = this.itemArray.find((el: any) => {return el.name === book.name});
    if (targetBook) {
      book.quantity++;     // вместо book правильно targetBook
    } else {
      book.quantity = 1;
      this.itemArray.push(book);
    }
  }

  deleteBook (book: any) {
    this.itemArray = this.itemArray.filter((el: any) => el.name !== book.name)
  }

  ngAfterViewInit() {
    this.newVar.nativeElement.innerHTML = this.title;
  }
}
