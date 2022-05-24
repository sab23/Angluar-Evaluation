import { Component } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularcliproject';
  statistique1: Statistique = new Statistique("1", "Harry Potter", "9 000 000 000");
  statistique2: Statistique = new Statistique("2", "Seigneur des Anneaux", "3 000 000 000");
}
