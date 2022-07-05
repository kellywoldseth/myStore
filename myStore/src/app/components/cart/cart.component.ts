import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  userName: string = '';
  userAddress: string = '';
  userCC: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit():void
  {
    this.router.navigate(['/confirmation']);
  }



}
