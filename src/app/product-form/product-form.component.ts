import { Component, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Model';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

 @Input() products:Product[];
  constructor(private productService:ProductService) {


  }

saveProduct(name:string,price:number,isActive:boolean){

const product = new Product(0,name,price,isActive);

this.productService.addProduct(product).subscribe(product=> this.products.push(product));
}


}
