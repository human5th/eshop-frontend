import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductsService } from "src/app/services/products.service";
import { environment } from "src/environments/environment";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
    currentUser: any = null;
    products: any = [];
    cloneProducts: any = [];
    productsCount: any;
    users: any = []


    constructor (private productService: ProductsService, private router:Router, private _httpClient:HttpClient) {}
    logout() {
        localStorage.removeItem('token')
        if(localStorage.getItem('token')==null) {
            this.router.navigateByUrl('login')
        }
        
    }

    async removeProductById(idprod,index) {
        (await this.productService.rmProductById(idprod)).subscribe(res=>{
            console.log(res)
            this.products.splice(index, 1)

        })
    }

    async ngOnInit() {

        (await this.productService.getProductsCount()).toPromise().then(res => {
            this.productsCount = res
        })

        this.currentUser = localStorage.getItem('user')
        
        let  headers = new HttpHeaders({
            'Content-Type': "application/json",
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          })

        if (localStorage.getItem('token')==null) {
            this.router.navigateByUrl('login')
        }
        
        await this._httpClient.get(`${environment.apiUrl}products`).toPromise().then(res=>{
            this.products = res
            
        })
        this.cloneProducts =  this.products
        this.cloneProducts.splice(5, this.cloneProducts.length-1)    

        await this._httpClient.get(`${environment.apiUrl}categories`, { headers: headers }).toPromise().then(res=>{
          console.log(res)
        })

        await this._httpClient.get(`${environment.apiUrl}users`, { headers: headers }).toPromise().then(res=>{
            console.log(res)
            this.users = res
          })


    }
}