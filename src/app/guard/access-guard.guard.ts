import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const accessGuardGuard: CanActivateFn = (route, state) => {

  const cookieService = inject(CookieService);
  const router = inject(Router);

  const userRole = cookieService.get('userRole');

  if (userRole === 'admin') {
    return true;
  } else {
    router.navigate(['/unauthorized']);
    return false;
  }
};
