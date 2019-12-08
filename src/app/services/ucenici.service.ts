import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ucenici } from '../interface/ucenici';

@Injectable({
  providedIn: 'root'
})
export class UceniciService {

  constructor(private _http: HttpClient) { }

  allUcenici(){

    return this._http.get<Ucenici[]>("http://localhost:8080/api/ucenici")
  }
}
