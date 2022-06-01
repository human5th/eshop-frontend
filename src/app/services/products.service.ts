import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _httpClient: HttpClient) { }

  async saveProduct(value) {
    let  headers = new HttpHeaders({
        'Content-Type': "application/json",
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    return await this._httpClient.post(`http://localhost:3000/api/v1/products/`, value, {headers: headers})
  }

  async rmProductById(idprod) {
    let  headers = new HttpHeaders({
        'Content-Type': "application/json",
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    return await this._httpClient.delete(`http://localhost:3000/api/v1/products/${idprod}`, {headers: headers})
  }

  async getToProductById(idprod) {
    let  headers = new HttpHeaders({
        'Content-Type': "application/json",
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    return await this._httpClient.get(`http://localhost:3000/api/v1/products/${idprod}`, {headers: headers})
  }

  async getProductsCount() {
    return await this._httpClient.get(`http://localhost:3000/api/v1/products/get/count`)
  }
  
}
