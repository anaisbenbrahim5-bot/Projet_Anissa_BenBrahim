import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RecetteTunisienne } from '../../../models/recette-tunisienne';
import { RecetteService } from '../../../services/recette-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth-service';

@Component({
  selector: 'app-modifier-recette',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './modifier-recette.html',
  styleUrl: './modifier-recette.css',
})
export class ModifierRecette implements OnInit {
  authService:AuthService=inject(AuthService);
  recetteService = inject(RecetteService);
  fb = inject(FormBuilder);
  routeActive = inject(ActivatedRoute);
  router:Router=inject(Router);
  recetteId: string = '';
  recette: RecetteTunisienne | null = null;
  recetteForm!:FormGroup;
  ngOnInit(): void {
    this.recetteForm = this.fb.nonNullable.group({
      nom: ['', [Validators.required, Validators.minLength(3)]],
      photo: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      ingredients: this.fb.nonNullable.array([]),
      tempsPreparation: [0, [Validators.required, Validators.min(1)]],
      difficulte: ['', Validators.required],
      estTraditionnelle: [true],
      dateAjout:[],
      nbPortions: [0, [Validators.required, Validators.min(1)]],
      comments: this.fb.nonNullable.array([])
    });
    this.recetteId = this.routeActive.snapshot.paramMap.get('id') || '';

    this.recetteService.getRecetteById(this.recetteId).subscribe(
      (data) => {
        this.recette = data;
        this.populateForm(data);
      },
    );
  }

  populateForm(recette: RecetteTunisienne): void {
    this.ingredients.clear();
    recette.ingredients.forEach((ingredient) => {
      this.ingredients.push(this.fb.nonNullable.control(ingredient, Validators.required));
    });
    this.comments.clear();
  recette.comments.forEach((comment) => {
    this.comments.push(this.fb.nonNullable.control(comment));
  });

    this.recetteForm.patchValue({
      nom: recette.nom,
      photo: recette.photo,
      description: recette.description,
      tempsPreparation: recette.tempsPreparation,
      difficulte: recette.difficulte,
      estTraditionnelle: recette.estTraditionnelle,
      dateAjout:recette.dateAjout,
      nbPortions: recette.nbPortions,
      comments:recette.comments
    });
  }

  get ingredients() {
    return this.recetteForm.get('ingredients') as FormArray;
  }

  addIngredient() {
    this.ingredients.push(this.fb.nonNullable.control('', Validators.required));
  }
  get comments() {
    return this.recetteForm.get('comments') as FormArray;
  }

  OnSubmit() {
    this.recetteService.updateRecette(this.recetteId,this.recetteForm.value as RecetteTunisienne).subscribe(
     ()=>alert('recette est modifier')
    )
    
  }
  OnDisconnect(){
    this.authService.logout();
      this.router.navigate(['admin/login']);
  }
}
