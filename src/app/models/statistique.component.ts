import { Component, Input, OnInit } from '@angular/core';
import { Statistique } from '../models/statistique';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  
})
export class StatistiqueComponent implements OnInit {

  @Input() statistique!: Statistique;

  constructor() { }

  ngOnInit(): void {
  }

}
