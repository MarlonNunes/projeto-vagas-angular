import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VagasListaComponent } from './vagas-lista/vagas-lista.component';

const routes: Routes = [
  { path: 'vagas-lista', component: VagasListaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VagasRoutingModule { }
