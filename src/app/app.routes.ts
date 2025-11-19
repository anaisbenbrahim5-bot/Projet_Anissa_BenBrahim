import { Routes } from '@angular/router';
import { AjoutRecette } from './components/back-office/ajout-recette/ajout-recette';
import { Dashboard } from './components/back-office/dashboard/dashboard';
import { Login } from './components/back-office/login/login';
import { ModifierPassword } from './components/back-office/modifier-password/modifier-password';
import { ModifierRecette } from './components/back-office/modifier-recette/modifier-recette';
import { RecetteDetail } from './components/front-office/recette-detail/recette-detail';
import { RecetteList } from './components/front-office/recette-list/recette-list';

export const routes: Routes = [
  { path: 'recettes',title:'les saveurs de tunisie', component: RecetteList },
  { path: 'recette/:id', component: RecetteDetail },
    {
        path: 'admin',
        children: [
          { path: 'login', component: Login },
          { path: 'dashboard', component: Dashboard },
          {path:'add',component:AjoutRecette},
          {path:'NewPassword',component:ModifierPassword},
          {path:"modifie/:id",component:ModifierRecette}
        ]
    },
        { path: '', redirectTo: '/admin/login', pathMatch: 'full' }
];
