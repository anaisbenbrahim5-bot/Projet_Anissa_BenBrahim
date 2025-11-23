import { DatePipe, DecimalPipe, LowerCasePipe, TitleCasePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Commentaire } from '../../../models/commentaire';
import { RecetteTunisienne } from '../../../models/recette-tunisienne';
import { RecetteService } from '../../../services/recette-service';
import { DurationPipe } from '../pipes/duration-pipe';

@Component({
  selector: 'app-recette-detail',
  imports: [ReactiveFormsModule,DatePipe,TitleCasePipe,LowerCasePipe,DecimalPipe,DurationPipe],
  templateUrl: './recette-detail.html',
  styleUrl: './recette-detail.css',
})
export class RecetteDetail implements OnInit {
  recetteService:RecetteService=inject(RecetteService);
  fb=inject(FormBuilder);
  route=inject(ActivatedRoute);
  router=inject(Router);
  recetteId: string = '';
  recette:RecetteTunisienne|null=null;
  commentForm!:FormGroup
  ngOnInit(): void {
    this.commentForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      message: ['', [Validators.required, Validators.minLength(5)]],
      date:[new Date()]
    });
    this.recetteId=this.route.snapshot.params["id"] ||''  ;
    this.recetteService.getRecetteById(this.recetteId).subscribe(
      (data)=>{
        if(data){
          this.recette = data;
        }
          else{
            console.log('error');
          }
      } 
    )
  }
  OnSubmitComment() {
    if (this.commentForm.valid && this.recette) {
      this.recette.comments.push(this.commentForm.value as Commentaire);
      
      this.recetteService.updateRecette(this.recetteId, this.recette).subscribe(
        () => {
          console.log('Commentaire enregistrer');
          this.commentForm.reset();
        }
      );
    }
  }



}
