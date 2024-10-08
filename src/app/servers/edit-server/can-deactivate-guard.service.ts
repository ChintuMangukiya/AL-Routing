import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export interface CanComponentDeactive{
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;

}


export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactive> {

    canDeactivate(component: CanComponentDeactive, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return component.canDeactivate();
    }
}