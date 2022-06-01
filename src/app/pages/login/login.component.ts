import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  submitted = false;
  model: User;
  obj: any;
  current: any;
  constructor(private _httpClient: HttpClient, private router: Router) { }

  async onSubmit(login: NgForm) {
    // console.log(login.value);
    this.model = login.value;
    this.submitted = true;
    await this._httpClient.post('http://localhost:3000/api/v1/users/login', this.model).toPromise().then(res=>{
      this.current = res
    })

    if (this.current.token) {
      this.router.navigateByUrl('/dashboard')
      localStorage.setItem('user', this.current.user)
      localStorage.setItem('token',this.current.token)
    }

  }
  
  ngOnInit(): void {
    
    if (localStorage.getItem('token')!==null) {
      this.router.navigateByUrl('dashboard')
    }
    
    this.model = new User("contact@enock.mg","1234");
  }

}
