import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';
import { UserService } from 'src/app/services/user.service';

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


  constructor(
    private router: Router,
    private cartService: CartService,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.total = this.cartService.calculateTotal();
  }

  onSubmit(): void {
    this.total = this.cartService.calculateTotal();
    this.router.navigate(['/confirmation']);

  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cart = [];
    this.total = this.cartService.calculateTotal();
  }
  
  removeItem(product: Product): void
  {
    this.cartService.removeItemFromCart(product);
    this.total = this.cartService.calculateTotal();
  }

  updateQuantity(product: Product, quantity: number): void
  {
    this.cartService.updateQuantity(product, quantity);
    this.total = this.cartService.calculateTotal();
  }

  calculateTotal(): void
  {
    this.total = this.cartService.calculateTotal();
  }


}
