// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Constant } from '../constant/constant';

// @Injectable({
//   providedIn: 'root'

// })
// export class ProductService {

//   constructor(private http: HttpClient) { }
  

//   getCategory(){
//     return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORY);
//   }
//   getProducts(){
//     return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORY);
//   }
//   saveProduct(obj: any){
//     return this.http.post(Constant.API_END_POINT + Constant.METHODS.CRAETE_PRODUCT,obj);
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constant } from '../constant/constant'; // Import your Constant file

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getCategory(): Observable<any> {
    return this.http.get<any>(`${Constant.API_END_POINT}${Constant.METHODS.GET_ALL_CATEGORY}`);
  }

  getProducts(): Observable<any> {
    return this.http.get<any>(`${Constant.API_END_POINT}${Constant.METHODS.GET_ALL_PRODUCT}`);
  }

  saveProduct(productObj: any): Observable<any> {
    return this.http.post<any>(`${Constant.API_END_POINT}${Constant.METHODS.CRAETE_PRODUCT}`, productObj);
  }
}
