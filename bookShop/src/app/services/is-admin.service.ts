import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsAdminService {

  constructor() { }

  isAdmin: boolean = true;

  getAdminName(name: string) {
    if (name === 'admin') {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
      alert('incorrect name')
    }
  }
}
