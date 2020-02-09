import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PolaganjePredmeta } from '../interface/PolaganjePredmeta';

@Injectable({
  providedIn: 'root'
})
export class PolaganjePredmetaService {

  constructor(private _http: HttpClient) { }

  getAll(){

    return this._http.get<PolaganjePredmeta[]>("http://localhost:8080/api/polaganjePredmeta")
  }

  addPolaganje(polaganje: PolaganjePredmeta){

    return this._http.post("http://localhost:8080/api/polaganje", polaganje);
  }

  polozenPredmet(id){
    return this._http.get("http://localhost:8080/api/polaganje/"+id);
  }
}
