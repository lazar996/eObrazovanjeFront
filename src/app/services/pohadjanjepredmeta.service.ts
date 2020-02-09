import { Injectable } from '@angular/core';
import { Pohadja } from '../interface/Pohadja';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PohadjanjepredmetaService {
  

  constructor(private _http: HttpClient) { }



  newPohadjnje(pohadja: Pohadja){
    return this._http.post('http://localhost:8080/api/pohadjanje/', pohadja);
  }

  newPredavanje(predaje: Pohadja){

    return this._http.post('http://localhost:8080/api/predaje/', predaje);
  }

  deletePohadja(predmetId, jmbg){

    return this._http.delete('http://localhost:8080/api/pohadja/delete/'+predmetId+'/'+jmbg);
  }
  

  deletePredaje(predmetId, jmbg){

    return this._http.delete('http://localhost:8080/api/predaje/delete/'+predmetId+'/'+jmbg);
  }
}
