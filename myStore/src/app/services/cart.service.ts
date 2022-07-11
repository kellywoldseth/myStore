import { Injectable } from '@angular/core';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Product[] = [];
  total: number = 0;

  constructor() {}

  /**
  * @description gets cart
  * @return cart
  */
  getCart(): Product[] {
    return this.cart;
  }

  /**
  * @description adds product to cart
  * @param product - product to be added
  * @param quantity - quantity to be added
  */
  addProductToCart(product: Product, quantity: number): void {
    
    //if already in cart, update quantity but don't push product to cart
    this.cart = this.getCart();
    let alreadyInCart: boolean = false;
    for (let i = 0; i < this.cart.length; i++) {
      let item = this.cart[i];
      if (item.id == product.id) {
        alreadyInCart = true;
        item.quantity = +item.quantity + +quantity; //plus sign types to number- help provided by Udacity mentors
        alert(
          `Product already in cart. There are now ${item.quantity} ${product.name}s in cart.`
        );
      }
    }
    //if not in cart, update quantity and push to cart
    if (!alreadyInCart && quantity != 0) {
      product.quantity = quantity;
      this.cart.push(product);
      if(product.quantity>1)
        alert(`${product.quantity} ${product.name}s added to cart.`);
      else
        alert(`${product.quantity} ${product.name} added to cart.`);
    } 
    
    else if (!alreadyInCart && quantity == 0) {
      alert('Please select a quantity greater than 0.');
    }
  }

  /**
  * @description removes product to cart
  * @param product - product to be removed
  */
  removeItemFromCart(product:Product): void
  {
  this.cart = this.getCart();
  for (let i = 0; i < this.cart.length; i++) {
    let item = this.cart[i];
    if (item.id == product.id) {
      this.cart.splice(i, 1);
    }
  }
  product.quantity = 0;
}

    /**
  * @description clears cart
  */
  clearCart(): void {
    this.cart = [];
    this.total = 0;
  }

   /**
  * @description updates quantity of product from the cart itself
  * @param product - the product to update
  * @param quantity - the new quantity
  */
  updateQuantity(product: Product, quantity: number): void{
    this.cart = this.getCart();
    for (let i = 0; i < this.cart.length; i++) {
      let item = this.cart[i];
      if (item.id == product.id) {
        item.quantity = +item.quantity + +quantity;
          }
        }
    }


    /**
  * @description calculates total
  * @return total as a dollar amount
  */
  calculateTotal(): number {
    this.total = 0; //reset before every calculation
    for (let i = 0; i < this.cart.length; i++)
      this.total += this.cart[i].price * this.cart[i].quantity;
//    alert(`${this.total}`)
    return Math.round(this.total * 100) / 100;
  }
}
