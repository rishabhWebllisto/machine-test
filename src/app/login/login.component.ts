import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { login } from '../models/login';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

import { AuthService } from './../auth/authService';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  log_Obj: login
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private router: Router, private auth: AuthService, private newService: DataService, private http: HttpClient) { }

  ngOnInit() {
  }
  login() {
    console.log(this.loginForm.value);
    if (this.loginForm.value.email === 'deejay.chat@angelium.net' || this.loginForm.value.password === 'Test@123') {
      alert("1");
    }
    else {
      alert("2");
      this.newService.loginUser().subscribe((resultArray: any) => {
        console.log("XXXXXXXXXX xxXXXXXXXXXXXXXXXXXX", resultArray);
        this.log_Obj = resultArray;
        // const token = localStorage.setItem('token', JSON.stringify(resultArray.token));
        this.router.navigate(['/dashboard']);
      })
    }
  }

}
