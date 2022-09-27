import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetaliesService {

  constructor(private http:HttpClient) { }
  
  getProductById(id:any){
    return this.http.get(environment.baseApi+'products/'+id)

  }
}
