import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nastavnici } from '../interface/nastavnici';


@Injectable({
  providedIn: 'root'
})
export class NastavniciService {

  constructor(private _http: HttpClient) { }


  allNastavnici(){

    return this._http.get<Nastavnici[]>("http://localhost:8080/api/nastavnici")
  }
}
