import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Predmeti} from '../interface/predmeti'

@Injectable({
  providedIn: 'root'
})
export class PredmetiService {

  constructor(private _http: HttpClient) { }



  allPredmeti(){


    return this._http.get<Predmeti[]>("http://localhost:8080/api/predmeti")
  }
}
