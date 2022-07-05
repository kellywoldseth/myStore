import { Injectable } from '@angular/core';
import {Product} from '../models/Product';
import {Observable} from 'rxjs';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] = [];

  constructor() { }

  getProducts(): Product[]
  {
    return this.cart;
  }

  addProductToCart(product: Product):void
  {
    //check if product is already in cart -- need to do


    this.cart.push(product);
    console.log("currorder1: " + this.cart);

  }

  clearCart(): void
  {
    this.cart = [];
  }

  getCart(): Product[] {
    console.log("currorder: " + this.cart);
    return this.cart;
  }
}
