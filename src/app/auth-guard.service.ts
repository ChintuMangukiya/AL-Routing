import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";


@Injectable()

export class AuthGuard implements CanActivate{

    constructor(private authService: AuthService, private router: Router){

    }
    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //     this.authService.isAuthenticated().then(
    //         (autheticated: boolean) => {
    //             if(autheticated)
    //             {
    //                 return true;
    //             }
    //             else{
    //                 this.router.navigate(['/']);
    //             }
    //         }
    //     )
    // }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):any  {
        this.authService.isAuthenticated().then(
            (autheticated: boolean) => {

                if(autheticated)
                {
                    setTimeout(() => {
                        return true;
                    }, 800);
                }
                else{
                    this.router.navigate(['/']);
                }
            }
        )
    }
}