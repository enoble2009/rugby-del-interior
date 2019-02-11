import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface PeriodicElement {
  date: string;
  hour: string;
  team1: string;
  team2: string;
  place: string;
  result1: number;
  result2: number;
  actions: any;
}

const teams = {
  'caranchos': {name: "Caranchos Rugby Club", image: "./assets/teams/caranchos.jpg"},
  'trebol': {name: "Trébol", image: "./assets/teams/trebol.jpg"}
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: '01-01-2019', hour: '08:00', team1: teams['caranchos'].name, team2: teams['trebol'].name, place: 'La Cancha', result1: 48, result2: 32, actions: {edit: true}}
];

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {

  displayedColumns: string[] = ['date', 'hour', 'teams', 'place', 'results', 'actions'];
  dataSource = ELEMENT_DATA;
  tablesList = [
    { name: 'Copa Interior 2019' }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  closeSession() {
  	this.router.navigate(['/home']);
  }

  back() {
  	this.router.navigate(['/dashboard']);
  }

}
