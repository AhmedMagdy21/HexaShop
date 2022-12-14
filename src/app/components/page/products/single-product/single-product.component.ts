import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  @Input() data:any={};
  @Output() item =new EventEmitter();
  addButton:Boolean =false;
  amount:number = 0
  
  constructor() { }

  ngOnInit(): void {
  }
  add(){
    this.item.emit({item:this.data, quantity:this.amount})
  }

}
