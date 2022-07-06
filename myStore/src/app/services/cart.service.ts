import { Injectable } from '@angular/core';
import {Product} from '../models/product';
import {Observable} from 'rxjs';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] = [];

  username: string = '';
  
  constructor() { }

  getCart(): Product[] {
    return this.cart;
  }

  addProductToCart(product: Product, quantity: number):void
  {
    //if already in cart, update quantity but don't push product to cart
    this.cart = this.getCart();
    let alreadyInCart: boolean = false;
    for(let i =0; i<this.cart.length; i++)
    {
      let item = this.cart[i];
      if(item.id==product.id)
      {
        alreadyInCart = true;
        product.quantity = product.quantity + quantity;
        alert(`Product already in cart. There are now ${product.quantity} ${product.name}s in cart.`);
      }
    }
    //if not in cart, update quantity and push to cart
    if(!alreadyInCart && quantity!=0)
    {
      product.quantity = quantity;
      this.cart.push(product);
      alert(`${product.quantity} ${product.name}s added to cart.`);
    }
    else if(!alreadyInCart && quantity==0)
    {
      alert('Please select a quantity greater than 0.')
    }
  }

  //this method is only needed if I decide to add a "clear" button
  clearCart(): void
  {
    this.cart = [];
  }

  calculateTotal(): number{
    let total = 0;
     for(let i =0; i<this.cart.length; i++)
       total+= this.cart[i].price * this.cart[i].quantity;
     return Math.round(total *100)/100;
   }

   getUsername(): string{
    return this.username;
   }

}
