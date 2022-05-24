import { Component } from '@angular/core';
import { Statistique } from './models/statistique';
import { StatistiqueService } from './statistique.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'Statistiques franchises';

    constructor( public StatistiqueService: StatistiqueService){
      setTimeout(() => {
        this.StatistiqueService.statistiques.push(new Statistique("3", "Star Wars", "4 000 000 000"));
      }, 5000);
    }

}
