import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
isAuthenticated:boolean = false;
  constructor() {
    this.isAuthenticated = false;
   }
}
