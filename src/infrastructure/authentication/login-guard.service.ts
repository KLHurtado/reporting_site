
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
@Injectable()
export class LoginGuardService implements CanActivate {
  constructor(public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!sessionStorage.getItem('loginStatus')) {
      console.log("route --> ", route.data)
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
