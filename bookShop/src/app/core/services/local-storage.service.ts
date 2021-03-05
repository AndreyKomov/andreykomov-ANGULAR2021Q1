import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(a: string, b: any) {
    window.localStorage.setItem(a, b);
  }

  getItem(a: string) {
    window.localStorage.getItem(a);
  }

  removeItem(a: string) {
    window.localStorage.removeItem(a);
  }
}
