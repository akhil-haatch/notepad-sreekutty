import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
loggedIn:any
  constructor( private auth:AuthenticationService,private router: Router ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    this.loggedIn = sessionStorage.getItem("isLogedIn")
    if (this.auth.isAuthenticated == true || this.loggedIn == "true" ) {
      return true;  
    }
    alert("You are not autherised to view this page");
    this.router.navigate(['login']);
    return false;
  }
  }

