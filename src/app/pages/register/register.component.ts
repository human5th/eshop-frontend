import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ExtendedUser } from 'src/app/extend-user';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  newUser: any;
  model: ExtendedUser;
  submitted: boolean;
  current: any;

  constructor(private _httpClient: HttpClient, private router: Router) { }

  onSubmit(register: NgForm) {
    console.log(register.value);
    this.model = new ExtendedUser(
      register.value.name,
      register.value.email,
      register.value.password,
      register.value.phone,
      register.value.isAdmin,
      register.value.street,
      register.value.apartement,
      register.value.zip,
      register.value.city,
      register.value.country
    );
    this.newUser = {
      "name": this.model.name,
      "email": this.model.email,
      "password": this.model.password,
      "phone": this.model.phone,
      "isAdmin": this.model.isAdmin,
      "street": this.model.street,
      "apartement": this.model.apartement,
      "zip": this.model.zip,
      "city": this.model.city,
      "country": this.model.country
    }
    this._httpClient.post(`${environment.apiUrl}users/register`, this.newUser).subscribe(data=>{
      console.log(data)
    })
    this.submitted = true;
    this.router.navigateByUrl('/dashboard')
    console.log(this.submitted)
    let headers = new HttpHeaders({
      'Content-Type': "application/json",
      'Authorization': `Bearer ${this.current.token}`
    })
    this._httpClient.get(`${environment.apiUrl}categories`, { headers: headers }).subscribe(res=>{
      console.log(res)
    })
  }
  
  ngOnInit(): void {
    
    if (localStorage.getItem('token')!==null) {
      this.router.navigateByUrl('dashboard')
    }


  }

}
