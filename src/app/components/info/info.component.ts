import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  amount: number = 0;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.amount = 10;
  }

  agree(){
    this.amount++;
  }

  goToUsers(){
    this.router.navigate(['/users']);
  }

}
