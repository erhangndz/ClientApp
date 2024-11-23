import { Component, Input } from '@angular/core';
import { Product } from '../Model';
import { ProductService } from '../product.service';

import { Location } from '@angular/common';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {



@Input()  product:Product;
@Input()  products:Product[];

constructor(private productService:ProductService, private location:Location){

}

updateProduct(id:number,name:string,price:number,isactive:boolean){


  const p = new Product(id,name,price,isactive);
  this.productService.updateProduct(p).subscribe(p=>{
    this.products.splice(this.products.findIndex(p=>p.id==id),1,p);
  });

  }




}
