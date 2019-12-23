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

  
  postPredmet(mode:string,predmet:Predmeti){
    if(mode=="add"){
      return this._http.post("http://localhost:8080/api/predmeti",predmet);
    } else if(mode=="edit"){
      return this._http.put("http://localhost:8080/api/predmeti/"+predmet.predmetId,predmet);
    }
  }
  
  deletePredmet(predmet:Predmeti){
    return this._http.delete('http://localhost:8080/api/predmeti/'+predmet.predmetId);
  }
}
