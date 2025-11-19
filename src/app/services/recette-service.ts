import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecetteTunisienne } from '../models/recette-tunisienne';
const URL_API="http://localhost:3000/recettes";
@Injectable({
  providedIn: 'root',
})
export class RecetteService {
  private http:HttpClient=inject(HttpClient);
  public getRecettes():Observable<RecetteTunisienne[]>{
    return this.http.get<RecetteTunisienne[]>(URL_API);
  }
  public addRecette(recette:RecetteTunisienne):Observable<RecetteTunisienne>{
    return this.http.post<RecetteTunisienne>(URL_API,recette);
  }
  updateRecette(id: string, recette: RecetteTunisienne): Observable<RecetteTunisienne> {
    return this.http.put<RecetteTunisienne>(`${URL_API}/${id}`, recette);
  }
  deleteRecette(id: string): Observable<void> {
    return this.http.delete<void>(`${URL_API}/${id}`);
  }
  getRecetteById(id: string): Observable<RecetteTunisienne> {
    return this.http.get<RecetteTunisienne>(`${URL_API}/${id}`);
  }

}
