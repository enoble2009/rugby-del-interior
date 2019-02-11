import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  id: number;
  team: string;
  teamName: string;
  photo: string;
  actions: any;
}

const teams = {
  'caranchos': {name: "Caranchos Rugby Club", image: "./assets/teams/caranchos.jpg"}
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Eduardo Pomar', id: 49731406, team: teams['caranchos'].image, teamName: teams['caranchos'].name, photo: './assets/examplePlayers/p1.jpg', actions: {edit: true}},
  {position: 2, name: 'Efrain Manzanedo', id: 51233212, team: teams['caranchos'].image, teamName: teams['caranchos'].name, photo: './assets/examplePlayers/p2.jpg', actions: {edit: true}},
  {position: 3, name: 'José Sancho', id: 9921342, team: teams['caranchos'].image, teamName: teams['caranchos'].name, photo: './assets/examplePlayers/p3.jpg', actions: {edit: true}},
  {position: 4, name: 'Fabián Andrade', id: 289439313, team: teams['caranchos'].image, teamName: teams['caranchos'].name, photo: './assets/examplePlayers/p4.jpg', actions: {edit: true}},
  {position: 5, name: 'Bruno Barrios', id: 49572997, team: teams['caranchos'].image, teamName: teams['caranchos'].name, photo: './assets/examplePlayers/p5.jpg', actions: {edit: true}}
];

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

	displayedColumns: string[] = ['id', 'photo', 'name', 'team', 'actions'];
  dataSource = ELEMENT_DATA;
  teamsList = [teams['caranchos']];

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
