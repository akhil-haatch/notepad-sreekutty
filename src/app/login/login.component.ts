import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: any;
  password: any;
  isBtnClicked: boolean = false;
  isLoggedIn: any;
  constructor(private router: Router, private auth: AuthenticationService) { }

  ngOnInit(): void {
  }
  loginBtnClicked() {
    this.isBtnClicked = true;
    if (this.userName == "Haatch" && this.password == "Haatch") {
      this.auth.isAuthenticated = true;
      this.isLoggedIn = true
      sessionStorage.setItem("isLogedIn", this.isLoggedIn)
      this.router.navigate(['home']);
    }
  }

  isEditing() {
    this.isBtnClicked = false
  }

}
