import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGaurdGuard: CanActivateFn = (route, state) => {
  const router:Router=inject(Router);
  let connextion=localStorage.getItem("state");
  if(connextion=="connected")
  return true;
  else{
    router.navigate(['admin/login']);
    return false;
  }
};
