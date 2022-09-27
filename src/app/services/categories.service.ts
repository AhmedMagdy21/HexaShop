import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }

  getAllCategories(){
    return this.http.get(environment.baseApi+'products/categories')
  }
  getProductsByCategories(keyword:string){
    return this.http.get(environment.baseApi+'products/category/'+keyword)
  
  }}
