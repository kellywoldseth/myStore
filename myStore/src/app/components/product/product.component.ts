import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productListFiltered: Product[] = [];
  id: number = 0;
  item_quantity: number = 0; //bound to form

  constructor(
    private activatedroute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = parseInt(this.activatedroute.snapshot.paramMap.get('id')!);
    this.productService.getProducts().subscribe((res) => {
      this.productListFiltered = res.filter((p) => p.id == this.id);
    });
  }

  addProductToCart(product: Product): void {
    this.cartService.addProductToCart(product, this.item_quantity);
  }

  backToProducts(): void {
    this.router.navigate(['']);
  }
}
