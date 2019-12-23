import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Uplata } from '../interface/uplata';

@Injectable({
  providedIn: 'root'
})
export class UplataService {

  constructor(private _http: HttpClient) { }


  allUplate(){

    return this._http.get<Uplata[]>("http://localhost:8080/api/uplate")
  }
}
