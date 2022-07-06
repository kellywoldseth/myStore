import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product'
import {ProductService} from '../../services/product.service'
import {CartService} from '../../services/cart.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  item_quantity: number = 0; //bound to form
  
  constructor(private productService: ProductService, private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res =>{
      this.productList = res;
    });
  }

  addProductToCart(product: Product): void{
    this.cartService.addProductToCart(product, this.item_quantity);
  }

  displayProductDetails(idnum: number): void{
    this.router.navigate(['product/:id', {id: idnum}]);
  }

}
