import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GeologyAge, Page } from 'src/app/models/interfaces';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {
  @Input() data: Page | undefined;

  ovdControl = new FormControl('');
  ovds: GeologyAge[] = [];
  selectedGeoAge = {
    id: 14,
    title: 'Докембрий',
  }

  constructor(private api: ApiService) { }

  ngOnInit(): void {
      this.api.getGeologyAgeTree().subscribe((res) => {
      this.ovds = res;
    });
  }

  selectOvd(data: GeologyAge){
    console.log(data);
  }

}
