import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {  RouterLink } from '@angular/router';
import { RecetteTunisienne } from '../../../models/recette-tunisienne';
import { RecetteService } from '../../../services/recette-service';

@Component({
  selector: 'app-ajout-recette',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './ajout-recette.html',
  styleUrl: './ajout-recette.css',
})
export class AjoutRecette implements OnInit {
  recetteService:RecetteService=inject(RecetteService);
  private fb=inject(FormBuilder);
  recetteForm!:FormGroup
  ngOnInit(): void {
    this.recetteForm=this.fb.nonNullable.group({
      nom: ['Nouvelle Recette', [Validators.required, Validators.minLength(3)]],
      photo: ['https://example.com/photo.jpg', [Validators.required]],
      description: ['Description de la recette...', [Validators.required, Validators.minLength(10)]],
      ingredients: this.fb.array(['Ingrédient principal']),
      tempsPreparation: [30, [Validators.required, Validators.min(1)]],
      difficulte: ['Moyenne', [Validators.required]],
      estTraditionnelle: [true],
      dateAjout:[new Date()],
      nbPortions: [4, [Validators.required, Validators.min(1)]],
      comments: this.fb.array([])
    })
  }
  get ingredients() {
    return this.recetteForm.get('ingredients') as FormArray;
  }

  addIngredient() {
    this.ingredients.push(this.fb.control('', Validators.required));
  }
  OnSubmit(){
    this.recetteService.addRecette(this.recetteForm.value as RecetteTunisienne).subscribe(
      ()=>{
        alert("recette enregistre");
      }
    )
  }
}
