import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Korisnici} from '../interface/korisnici';
import { Nastavnici } from '../interface/Nastavnici';
import { PasswordChange } from '../interface/PasswordChange';
import { Ucenici } from '../interface/ucenici';
@Injectable({
  providedIn: 'root'
})
export class KorisniciService {

  constructor(private _http: HttpClient) { }

  getNastavnici(){
    return this._http.get<Nastavnici[]>("http://localhost:8080/api/nastavnici")
  }

  getUcenici(){
    return this._http.get<Ucenici[]>("http://localhost:8080/api/ucenici")
  }
  allKorisnici(){

    return this._http.get<Korisnici[]>("http://localhost:8080/api/korisnici")
  }

  changePassowrd(data:PasswordChange){
    return this._http.post('http://localhost:8080/api/lozinka',data);
  }

  deleteNastavnik(id:number){
    return this._http.delete("http://localhost:8080/api/nastavnici/"+id);
  }



  
}
