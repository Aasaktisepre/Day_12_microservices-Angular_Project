import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthserviceService} from './authservice.service';


export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthserviceService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};
