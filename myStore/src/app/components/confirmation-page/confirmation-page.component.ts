import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css']
})
export class ConfirmationPageComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backToProducts(): void{
    this.router.navigate(['']);
  }
}
