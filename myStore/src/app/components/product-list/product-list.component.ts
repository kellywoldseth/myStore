import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/Product'
import {ProductService} from '../../services/product.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res =>{
      this.productList = res;
    });
  }

  addProductToCart(product: Product): void{
    this.productService.addProductToCart(product);
    alert("Added to cart!");
  }

  displayProductDetails(p: Product): void{
    this.router.navigate(['product', {product: p}]);

  }

}
