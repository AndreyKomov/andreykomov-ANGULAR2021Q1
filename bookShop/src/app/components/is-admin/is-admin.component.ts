import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IsAdminService } from 'src/app/services/is-admin.service';

@Component({
  selector: 'app-is-admin',
  templateUrl: './is-admin.component.html',
  styleUrls: ['./is-admin.component.scss']
})
export class IsAdminComponent implements OnInit {

  constructor(
    public adminServ: IsAdminService,
    public router: Router
  ) { }

  adminName: string = '';

  ngOnInit(): void {
  }

  getInputValue(event: any) {
    this.adminName = event.target.value;
  }

  checkName() {
    this.adminServ.getAdminName(this.adminName);
    this.router.navigate(['admin']);
  }

}
