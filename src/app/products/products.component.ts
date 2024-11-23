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
this.getProducts();
}

getProducts(){
 this.productService.getProducts().subscribe(products=>{
  this.products = products;
});
}

onSelectProduct(product:Product){
  this.selectedProduct=product;
}


deleteProduct(id:number){
  this.productService.deleteProduct(id).subscribe(p=>{
    this.products.splice(this.products.findIndex(p=>p.id==id),1);
  });

}

}
