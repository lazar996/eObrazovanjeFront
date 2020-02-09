import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Uplata } from '../interface/Uplata';

@Injectable({
  providedIn: 'root'
})
export class UplataService {

  constructor(private _http: HttpClient) { }


  allUplate(){

    return this._http.get<Uplata[]>("http://localhost:8080/api/uplate")
  }


  deleteUplate(uplataId: number){

    return this._http.delete("http://localhost:8080/api/uplate/"+uplataId);
  }

  uploadUplata(mode: string, uplata){
    if(mode == "add"){


      return this._http.post("http://localhost:8080/api/uplata", uplata);
    }else {

      return this._http.put("http://localhost:8080/api/uplata", uplata);
    }

  }
}
