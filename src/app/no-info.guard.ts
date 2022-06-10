import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class NoInfoGuard implements CanActivate {

  constructor(
    private readonly router: Router,
    private readonly sharedService: SharedService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.sharedService.isUseInfo) {
        this.router.navigate(['/create-token'])
      }
    return true;
  }
  
}
