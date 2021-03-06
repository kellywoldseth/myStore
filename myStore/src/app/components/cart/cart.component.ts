import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: Product[] = [];
  total: number = 0;

  //user info bound to form
  name: string = '';
  userAddress: string = '';
  userCC: string = '';

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.total = this.cartService.calculateTotal();
  }

  onSubmit(): void {
    this.total = this.cartService.calculateTotal();
    this.cartService.updateUsername(this.name);
    this.router.navigate(['/confirmation']);
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cart = [];
    this.total = this.cartService.calculateTotal();
  }

  removeItem(product: Product): void {
    this.cartService.removeItemFromCart(product);
    this.total = this.cartService.calculateTotal();
  }

  updateQuantity(product: Product, event: Event): void {
    //const q = document.getElementById('quant');
    const q: HTMLInputElement = <HTMLInputElement>event.target;
    const qnum: number = q.valueAsNumber;
    this.cartService.updateQuantity(product, qnum);
    this.total = this.cartService.calculateTotal();
  }


  calculateTotal(): void {
    this.total = this.cartService.calculateTotal();
  }
}
