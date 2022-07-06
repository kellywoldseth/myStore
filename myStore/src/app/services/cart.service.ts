import { Injectable } from '@angular/core';
import {Product} from '../models/product';
import {Observable} from 'rxjs';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] = [];
  constructor() { }

  getCart(): Product[] {
    return this.cart;
  }


  addProductToCart(product: Product):void
  {
    //check if product is already in cart -- need to do
    //update quantity - need to do
    this.cart.push(product);
  }

  //this method is only needed if I decide to add a "clear" button
  clearCart(): void
  {
    this.cart = [];
  }

 

}
