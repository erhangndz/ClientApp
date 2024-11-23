export class Model {

  products: Array<Product>;




  constructor() {


    this.products = [
      new Product(1,"Samsung s20",12000,true),
      new Product(2,"Samsung s21",15000,false),
      new Product(3,"Samsung s22",18000,true),
      new Product(4,"Samsung s23",20000,false),
      new Product(5,"Samsung s24",30000,true),

    ]
  }
}



export class Product {

id:number;
name:string;
price:number;
isActive:boolean;


constructor(id:number,name:string,price:number,isActive:boolean) {
this.id=id;
this.name=name;
this.price=price;
this.isActive=isActive;

}

}
