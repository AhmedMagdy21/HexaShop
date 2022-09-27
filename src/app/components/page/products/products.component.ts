import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { AllproductsService } from 'src/app/services/allproducts.service';
import { CategoriesService } from 'src/app/services/categories.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  value :any;
  products :Product []=[];
  loading : boolean =false;
  categories:string[]=[];
  cartProducts:any[]=[];

  constructor( private service:AllproductsService ,private selectService:CategoriesService) { }

  ngOnInit(): void {
      this.getProducts(),
      this.getAllCategories()
  }

  getProducts(){
    this.loading=true
    this.service.getAllProducts().subscribe((res:any)=>{

      console.log(res);
      this.products=res
    this.loading=false
    },
    err=>{
      this.loading=false
      alert(err)
    }
    )
  }


    getAllCategories(){
    this.selectService.getAllCategories().subscribe((res:any)=>{

      // console.log(res);
      this.categories=res
      this.loading=false
    },
    err=>{
      this.loading=false
      alert(err)
    }
    )
  }

  filterCategoris(event:any){
    let value:any = event.target.value;
    (value == "all") ? this.getProducts() : this.getProductsCategories(value)
    // console.log(value)
    // this.getProductsCategories(value)
  }

  getProductsCategories(keyword:string){
    this.selectService.getProductsByCategories(keyword).subscribe((res:any)=>{
      this.loading =false
      this.products = res
    })
  }
  addToCart(event:any){
    // console.log(event)
    // this.cartProducts = localStorage.getItem("cart")
    // localStorage.setItem("cart",event)
    if("cart" in localStorage){
      this.cartProducts =JSON.parse(localStorage.getItem("cart")!);
      let exist = this.cartProducts.find(item =>item.item.id == event.item.id)
      if(exist){
        alert("product is already in your cart")
      }
      else{
        this.cartProducts.push(event);
        localStorage.setItem("cart", JSON.stringify(this.cartProducts))
      }

    }
    else{
      this.cartProducts.push(event);
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    }
  }

}
