import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetaliesService } from 'src/app/services/detalies.service';
DetaliesService
@Component({
  selector: 'app-detalis',
  templateUrl: './detalis.component.html',
  styleUrls: ['./detalis.component.css']
})
export class DetalisComponent implements OnInit {

  id:any;
  data:any ={};
  loading : boolean =false;
  amount:number = 0;
  // @Input() data:any={};
  @Output() item =new EventEmitter();

  constructor(private router:ActivatedRoute ,private services:DetaliesService) {
    this.id=this.router.snapshot.paramMap.get("id")
    console.log(this.id)
   }

  ngOnInit(): void {
    this. getProduct()

  }
  getProduct(){
    this.loading=true
    this.services.getProductById(this.id).subscribe(res=>{
    this.loading=false
      this.data =res
    },err =>{
    this.loading=false
      alert(err)
    })
  }
  add(){
    this.item.emit({item:this.data, quantity:this.amount})
  }
}
