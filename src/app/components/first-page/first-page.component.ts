import { Component, Input, OnInit } from '@angular/core';
import { Page } from 'src/app/models/interfaces';


@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  @Input() data: Page | undefined
  
  constructor() { }

  ngOnInit(): void {
  }

}
