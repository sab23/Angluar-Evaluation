import { Injectable } from '@angular/core';
import { Statistique } from './models/statistique';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {
  
  statistiques: Statistique[] = [
    new Statistique("1",  "Harry Potter", "9 000 000 000"),
    new Statistique("2", "Seigneur des Anneaux", "3 000 000 000")];

  constructor() { }
}
