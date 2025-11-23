import { Routes } from '@angular/router';
import { AjoutRecette } from './components/back-office/ajout-recette/ajout-recette';
import { Dashboard } from './components/back-office/dashboard/dashboard';
import { authGaurdGuard } from './components/back-office/gaurds/auth-gaurd-guard';
import { Login } from './components/back-office/login/login';
import { ModifierPassword } from './components/back-office/modifier-password/modifier-password';
import { ModifierRecette } from './components/back-office/modifier-recette/modifier-recette';
import { Info } from './components/front-office/info/info';
import { RecetteDetail } from './components/front-office/recette-detail/recette-detail';
import { RecetteList } from './components/front-office/recette-list/recette-list';

export const routes: Routes = [
  { path: 'recettes',title:'les saveurs de tunisie', component: RecetteList },
  { path: 'recettes/:id', component: RecetteDetail },
  {path:'info',title:'about us',component:Info},
    {
        path: 'admin',
        children: [
          { path: 'login', component: Login },
          { path: 'dashboard', component: Dashboard, canActivate:[authGaurdGuard] },
          {path:'add',component:AjoutRecette, canActivate:[authGaurdGuard]},
          {path:'NewPassword',component:ModifierPassword},
          {path:"modifie/:id",component:ModifierRecette,canActivate:[authGaurdGuard]}
        ]
    },
        { path: '', redirectTo: '/recettes', pathMatch: 'full' }
];
