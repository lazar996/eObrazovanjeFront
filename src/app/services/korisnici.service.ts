import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Korisnici} from '../interface/korisnici';

@Injectable({
  providedIn: 'root'
})
export class KorisniciService {

  constructor(private _http: HttpClient) { }


  allKorisnici(){

    return this._http.get<Korisnici[]>("http://localhost:8080/api/korisnici")
  }
}
