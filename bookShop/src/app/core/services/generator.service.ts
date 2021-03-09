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
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz0123456789';
  let resultString = '';
  for (let i = 0; i < n; i++) {
    resultString += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  }
  return new GeneratorService(resultString);
}
