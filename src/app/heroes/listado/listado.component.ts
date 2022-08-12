import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  heroes: string[] = ['Spider-Man', 'Iron-Man', 'Hulk', 'Thor'];
  deletedHero: string = "";

  borrarHeroe(){
    this.deletedHero = this.heroes.shift() || "";
  }

}
