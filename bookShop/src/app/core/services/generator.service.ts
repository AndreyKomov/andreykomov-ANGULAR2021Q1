import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
  useFactory: GeneratorFactory
})
export class GeneratorService {

  constructor(public str: string) { }

  getRandomString() {
    return this.str;
  }
}

export function GeneratorFactory(n: number) {
  const str = 'abc';
  return new GeneratorService(str);
}
