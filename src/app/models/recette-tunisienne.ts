import { Commentaire } from "./commentaire";

export interface RecetteTunisienne {
    id: string;                 
    nom: string;                
    photo: string;              
    description: string;      
    ingredients: string[];      
    tempsPreparation: number;   
    difficulte: "Facile" | "Moyenne" | "Difficile"; 
    estTraditionnelle: boolean; 
    dateAjout: Date;         
    nbPortions: number;         
    comments: Commentaire[]; 
  
}
