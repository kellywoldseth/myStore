import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css'],
})
export class ConfirmationPageComponent implements OnInit {
  constructor(private router: Router, private cartService: CartService) {}
  total: number = 0;
  username: string = '';

  ngOnInit(): void {
    //this.username = this.cartService.getUsername();
    this.total = this.cartService.calculateTotal();
  }

  backToProducts(): void {
    this.router.navigate(['']);
  }
}
