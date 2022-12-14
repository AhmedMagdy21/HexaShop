import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllproductsService {

  constructor(private http:HttpClient) { }
  
  getAllProducts(){
    return this.http.get(environment.baseApi+'products')
  }
}
