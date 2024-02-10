import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { InitialPageService } from '../services/initial-page.service';

export const initializeGuard: CanActivateFn = (route, state) => {
  return true;
};

@Injectable({
  providedIn: 'root',
})
export class InitializeGuard {
  constructor(
    private initialPageService: InitialPageService,
    private router: Router
  ) {}

  public canActivate: CanActivateFn = (route, state) => {
    console.log("route: ", route, " state: ", state);
    if (this.initialPageService.shouldInitialize) {
      this.initialPageService.markAsInitialized();
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}