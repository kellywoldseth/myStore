import { Injectable } from '@angular/core';
import {Product} from '../models/Product';
import {Observable} from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: Product[] = [];

  constructor(private http: HttpClient) { }

  //'/assets/data.json'
  getProducts(): Observable<Product[]>
  {
return this.http.get<Product[]>('assets/data.json')
  }

  addProductToCart(product: Product): Observable<Product[]>
  {
    this.productList.push(product);
    return this.http.get<Product[]>('assets/data.json')
}

}