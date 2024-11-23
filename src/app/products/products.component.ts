import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Model';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products: Product[];
  selectedProduct: Product;


constructor(private productService:ProductService){
  this.products= this.productService.getProducts();
}

getProducts(): Product[]{
return this.productService.getProducts();
}

onSelectProduct(product:Product){
  this.selectedProduct=product;
}


deleteProduct(id:number){
  this.productService.deleteProduct(id);

}

}
