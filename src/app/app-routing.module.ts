import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { VagasListaComponent } from './vagas/vagas-lista/vagas-lista.component';

const routes: Routes = [
  { path : 'body', component: BodyComponent},
  {path : 'vagas', component: VagasListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
