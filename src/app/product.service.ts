import { Injectable } from '@angular/core';
import { Model, Product } from './Model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  baseUrl: string = "https://localhost:5001/api/"
  model = new Model();
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl+"products");
  }

  addProduct(product:Product): Observable<Product> {
return this.http.post<Product>(this.baseUrl+"products",product);
  }

  getProductById(id:number){
    return this.model.products.find(x=>x.id==id);
  }

  updateProduct(product: Product) : Observable<Product> {

    return this.http.put<Product>(this.baseUrl+"products",product);

    }

    deleteProduct(id:number): Observable<Product> {
      return this.http.delete<Product>(this.baseUrl+"products/"+id);
    }

  }





