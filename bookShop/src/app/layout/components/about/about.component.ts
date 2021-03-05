import { Component, OnInit, Optional } from '@angular/core';
import { GeneratorService } from 'src/app/core/services/generator.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(@Optional() public generatorServ: GeneratorService) { }

  ngOnInit(): void {
    console.log(this.generatorServ.getRandomString());

  }

}
