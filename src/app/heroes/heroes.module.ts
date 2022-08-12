import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import { HeroeComponent } from './heroe/heroe.component';
import {ListadoComponent} from './listado/listado.component';


@NgModule({
  declarations: [ //Los componentes que voy a usar EN EL MODULO, obvio antes los importo.
    HeroeComponent,
    ListadoComponent
  ],
  exports: [ //Las cosas que hare publicas PARA AFUERA de este modulo.
    ListadoComponent,
    HeroeComponent
  ],
  imports: [ //Aqui solo iran modulos, por defecto va el CommonModule.
    CommonModule
  ]
})

export class HeroesModule {}
