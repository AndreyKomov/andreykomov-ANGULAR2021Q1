import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(public client: HttpClient) { }

  getData() {
    return this.client.get('http://localhost:3000/profile');
  }
}
