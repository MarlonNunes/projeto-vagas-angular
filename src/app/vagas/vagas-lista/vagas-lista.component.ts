import { Component, OnInit } from '@angular/core';
import { VagasService } from 'src/app/vagas.service';
import { Vaga } from '../vaga';

@Component({
  selector: 'app-vagas-lista',
  templateUrl: './vagas-lista.component.html',
  styleUrls: ['./vagas-lista.component.css']
})
export class VagasListaComponent implements OnInit {

  vagas: Vaga[] = [];

  constructor(private service: VagasService) { 
  }

  ngOnInit(): void {
    this.service
      .getVaga()
      .subscribe(Response => this.vagas = Response);
  }

}
