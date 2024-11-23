import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Model';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

  /**
   *
   */
  constructor(private productService:ProductService) {


  }

saveProduct(name:string,price:number,isactive:boolean){
console.log(name,price,isactive);

const p = new Product(0,name,price,isactive);
this.productService.saveProduct(p);
}


}
