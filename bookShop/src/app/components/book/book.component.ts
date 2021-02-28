import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookModel } from 'src/app/models/BookModel';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() element: BookModel = {} as any;

  @Output() getBook = new EventEmitter();

  ngOnInit(): void {
  }

  onBuy(): void {
    console.log('Buy');
    this.getBook.emit(this.element);              // вызвал эмиттер
  }

}
