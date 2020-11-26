import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VagasRoutingModule } from './vagas-routing.module';
import { VagasListaComponent } from './vagas-lista/vagas-lista.component';


@NgModule({
  declarations: [VagasListaComponent],
  imports: [
    CommonModule,
    VagasRoutingModule
  ],
  exports: [
    VagasListaComponent
  ]
})
export class VagasModule { }
