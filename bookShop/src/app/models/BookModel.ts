export interface BookModel {
  name: string;
  description: string;
  price: number;
  category: BooksCategories;
  createDate: number;
  isAvailable: boolean;
  quantity?: number;
}

interface MyObject {
  name: string;
  myMethod: (a: string) => string;
}

export enum BooksCategories {
  Fantasy = 'Fantasy',
  Western = 'Western',
}

class Andron implements MyObject {
  constructor() {

  }
  name = 'cat';
  myMethod(): any {
    return 'abc';
  }
}
