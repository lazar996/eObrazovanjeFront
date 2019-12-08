import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dokument } from '../interface/Dokumenta';

@Injectable({
  providedIn: 'root'
})
export class DokumentaService {

  constructor(private _http: HttpClient) { }
  


  allDokumenta(){
    return this._http.get<Dokument[]>("http://localhost:8080/api/dokumenta")
  }
}
