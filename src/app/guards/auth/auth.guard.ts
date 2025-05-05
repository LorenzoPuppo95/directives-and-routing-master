import { inject } from '@angular/core';
import { CanActivateFn, createUrlTreeFromSnapshot, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authServ = inject(AuthService);
  const router = inject(Router);
  if (authServ.isAuth) {
    console.log('sei il benvenuto!')
    return true;
  } else {
    console.log('TU NON PUOI PASSARE!')
    return router.createUrlTree(['/login'])
  }
};
