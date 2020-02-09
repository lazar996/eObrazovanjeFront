import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Pohadja} from '../interface/Pohadja'

@Injectable({
  providedIn: 'root'
})
export class PohadjanjeListService {
  

  constructor(private _http: HttpClient) { }


  newPohadjanje(pohadja: Pohadja){

    return this._http.post('http://localhost:8080/api/pohadja', pohadja);

  }
}
