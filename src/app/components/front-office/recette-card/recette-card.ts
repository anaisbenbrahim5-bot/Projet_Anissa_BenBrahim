import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RecetteTunisienne } from '../../../models/recette-tunisienne';

@Component({
  selector: 'app-recette-card',
  imports: [RouterLink],
  templateUrl: './recette-card.html',
  styleUrl: './recette-card.css',
})
export class RecetteCard {
  @Input() recette!: RecetteTunisienne;

}
