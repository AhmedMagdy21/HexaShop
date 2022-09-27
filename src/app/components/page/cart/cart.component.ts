import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts:any[]=[]
  total:any =0
  constructor( private services:CartService ) { }

  ngOnInit(): void {
    this.getCartProduct();
  }
  getCartProduct(){
    if("cart" in localStorage){
      this.cartProducts =JSON.parse(localStorage.getItem("cart")!);
    }
    // console.log(this.cartProducts)
    this.getCartTotal()
   }
   getCartTotal(){
    this.total =0
    for(let x in this.cartProducts){
      this.total += this.cartProducts[x].item.price*this.cartProducts[x].quantity;
    }
   }
   addAmount(index:number){
    this.cartProducts[index].quantity++
    this.getCartTotal()
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
   }
   changeAmount(){
    this.getCartTotal()
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))

   }
   minsAmount(index:number){
    this.cartProducts[index].quantity--
    this.getCartTotal()
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))

  }
  Remove(index:number){
    this.cartProducts.splice(index , 1)
    this.getCartTotal()
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))

  }
  clear(){
    this.cartProducts = []
    this.getCartTotal()
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))

  }
   addCart(){
     let products =this.cartProducts.map(item =>{
      return{productId:item.item.id , quantity:item.quantity}
     })
    let model ={
      userId:5 ,
      date : new Date() ,
      products :products
    }
    this.services.creatNewCart(model).subscribe(res =>{
    this.cartProducts = []
    this.getCartTotal()
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    })
    console.log(model)
  }
}
