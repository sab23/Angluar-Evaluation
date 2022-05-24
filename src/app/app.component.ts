import { Component } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Statistiques franchises';
  statistiques: Statistique[] = [
    new Statistique("1",  "Harry Potter", "9 000 000 000"),
    new Statistique("2", "Seigneur des Anneaux", "3 000 000 000")];

    constructor(){
      setTimeout(() => {
        this.statistiques.push(new Statistique("3", "Star Wars", "4 000 000 000"));
      }, 5000);
    }

}
