import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  categories: any
  constructor(private __router: Router, private _httpClient:HttpClient, private productService: ProductsService) { }

  checkSubmit(cp:NgForm) {
    if(!cp.valid) {
      return false 
    }
    return true
  }

  async onSubmit(cp:NgForm) {
    cp.value.description = "test";
    cp.value.richdescription = "test";
    cp.value.price = 200;
    console.log(cp.value.image)
    if(!cp.valid) {
      console.log('not complete')
      return false
    }
    /*
    (await this.productService.saveProduct(cp.value)).toPromise().then(res=>{
      console.log(res)

    }).catch(err=>console.log(err))

    this.__router.navigateByUrl("/dashboard", { skipLocationChange: false })*/
  }

  async ngOnInit() {
    let  headers = new HttpHeaders({
      'Content-Type': "application/json",
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    
    await this._httpClient.get('http://localhost:3000/api/v1/categories', { headers: headers }).toPromise().then(res=>{
      this.categories = res
    })
  } 

}
