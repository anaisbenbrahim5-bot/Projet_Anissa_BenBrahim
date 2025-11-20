import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RecetteTunisienne } from '../../../models/recette-tunisienne';
import { RecetteService } from '../../../services/recette-service';
import { AuthService } from '../../../services/auth-service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, FormsModule], 
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit{
  recettes:RecetteTunisienne[]=[];
  filteredRecettes: RecetteTunisienne[] = [];
  recetteService:RecetteService=inject(RecetteService);
  authService:AuthService=inject(AuthService);
  router:Router=inject(Router);
  searchNom: string = '';

  ngOnInit(): void {
    this.recetteService.getRecettes().subscribe(
      data=>{
        this.recettes=data;
        this.filteredRecettes = data;
      }
    )
  }

  onSearch() {
    this.filteredRecettes = this.recettes.filter(recette => {
      return !this.searchNom || recette.nom.toLowerCase().includes(this.searchNom.toLowerCase());
    });
  }

  OnSupprimer(id:string){
    this.recetteService.deleteRecette(id).subscribe(
      ()=> {
        console.log("recette supprimer");
        this.recettes = this.recettes.filter(r => r.id !== id);
        this.filteredRecettes = this.filteredRecettes.filter(r => r.id !== id);
      }
    );
  }
  OnDisconnect(){
    this.authService.logout();
      this.router.navigate(['admin/login']);
  }
}