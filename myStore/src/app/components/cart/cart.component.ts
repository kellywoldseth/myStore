import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductService} from '../../services/product.service'
import {CartService} from '../../services/cart.service'
import {Product} from '../../models/product'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  userName: string = '';
  userAddress: string = '';
  userCC: string = '';
  cart: Product[] = [];

  constructor(private router: Router, private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  onSubmit():void
  {
    this.router.navigate(['/confirmation']);
  }

  /*
  calculateTotal(): number{
    total = 0;
    for(Product p in currentOrder)
      total+= p.price;
    return total;
  }*/


}
