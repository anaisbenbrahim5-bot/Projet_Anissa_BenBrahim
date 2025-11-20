import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RecetteTunisienne } from '../../../models/recette-tunisienne';
import { RecetteService } from '../../../services/recette-service';
import { RecetteCard } from '../recette-card/recette-card';

@Component({
  selector: 'app-recette-list',
  imports: [ ReactiveFormsModule, RecetteCard,RouterLink],
  templateUrl: './recette-list.html',
  styleUrl: './recette-list.css',
})
export class RecetteList implements OnInit {
  recetteService:RecetteService=inject(RecetteService);
  private fb = inject(FormBuilder);
  
  recettes:RecetteTunisienne[]=[];
  filteredRecettes: RecetteTunisienne[] = [];
  searchForm = this.fb.nonNullable.group({
    nom: [''],
    difficulte: ['Toutes difficultés']
  });

  ngOnInit(): void {
    this.recetteService.getRecettes().subscribe(
      data => {
        this.recettes = data;
        this.filteredRecettes = data;
      }
    );
  }
  onSearch() {
    const { nom, difficulte } = this.searchForm.value;
    
    this.filteredRecettes = this.recettes.filter(recette => {
      const matchesNom = !nom || recette.nom.toLowerCase().includes(nom.toLowerCase());
      const matchesDifficulte = !difficulte || recette.difficulte === difficulte;
      
      return matchesNom && matchesDifficulte;
    });
  }
  onReset() {
    this.searchForm.reset();
    this.filteredRecettes = this.recettes;
  }
}