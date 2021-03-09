import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {

  constructor(public router: Router) { }

  @ViewChild('appTitle') newVar: any;

  title = 'bookShop';

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.newVar.nativeElement.innerHTML = this.title;
  }
}
