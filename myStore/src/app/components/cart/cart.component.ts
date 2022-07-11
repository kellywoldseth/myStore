import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  @Input() username: string = '';
  userAddress: string = '';
  userCC: string = '';
  total: number = 0;

  cart: Product[] = [];

  constructor(
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.total = this.cartService.calculateTotal();
  }

  onSubmit(): void {
    this.router.navigate(['/confirmation']);
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cart = [];
  }
  
  removeItem(product: Product): void
  {
    this.cartService.removeItemFromCart(product);
  }

  calculateTotal(): void
  {
    this.total = this.cartService.calculateTotal();
  }
}
