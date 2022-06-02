import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

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
    return await this._httpClient.post(`${environment.apiUrl}`, value, {headers: headers})
  }

  async rmProductById(idprod) {
    let  headers = new HttpHeaders({
        'Content-Type': "application/json",
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    return await this._httpClient.delete(`${environment.apiUrl}${idprod}`, {headers: headers})
  }

  async getToProductById(idprod) {
    let  headers = new HttpHeaders({
        'Content-Type': "application/json",
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    return await this._httpClient.get(`${environment.apiUrl}${idprod}`, {headers: headers})
  }

  async getProductsCount() {
    return await this._httpClient.get(`${environment.apiUrl}get/count`)
  }
  
}
