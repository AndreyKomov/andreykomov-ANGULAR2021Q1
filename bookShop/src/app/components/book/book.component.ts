import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BookModel } from 'src/app/models/BookModel';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  constructor(public router: Router) {}

  @Input() element: BookModel = {} as any;

  @Output() putBookToCart = new EventEmitter();

  ngOnInit(): void {
  }

  onBuy(): void {
    console.log('Buy');
    this.putBookToCart.emit(this.element);              // вызвал эмиттер
    this.router.navigate(['/cart']);
  }

  showBookCard() {
    this.router.navigate(['/product', this.element.id]);
  }

}
