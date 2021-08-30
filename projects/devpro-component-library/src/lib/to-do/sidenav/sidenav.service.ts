import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private _showSideNav$ = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
    router.events.subscribe(() => {
      this.setShowNav(false);
    });
  }

  getShowNav(): Observable<boolean> {
    return this._showSideNav$.asObservable();
  }

  setShowNav(state: boolean): void {
    this._showSideNav$.next(state);
  }

  toggleShowNavState(): void {
    this._showSideNav$.next(!this._showSideNav$.value);
  }

  isSideNavOpen(): boolean {
    return this._showSideNav$.value;
  }
}
