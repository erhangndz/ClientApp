import { Component, Input } from '@angular/core';
import { Product } from '../Model';
import { ProductService } from '../product.service';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

@Input()  product:Product;

constructor(private productService:ProductService){

}

saveProduct(id:number,name:string,price:number,isactive:boolean){
  console.log(name,price,isactive);

  const p = new Product(id,name,price,isactive);
  this.productService.saveProduct(p);
  this.product=null;
  }


}
