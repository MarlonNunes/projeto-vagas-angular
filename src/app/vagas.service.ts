import { Injectable } from '@angular/core';
import { Vaga } from './vagas/vaga';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VagasService {

  constructor( private http: HttpClient) { }

 getVaga() : Observable<Vaga[]>{
    return this.http.get<Vaga[]>('http://localhost:8080/vagas/buscar');
  }

}
