import { Component, Input, OnInit } from '@angular/core';
import { Page } from 'src/app/models/interfaces';


@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnInit {
  @Input() data: Page | undefined
  
  constructor() { }

  ngOnInit(): void {
  }

}
