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

  deleteStudent(id:number){
    return this._http.delete("http://localhost:8080/api/ucenik/"+id);
  }

  uploadUcenika(ucenik:Ucenici,mode:string){
  if(mode=="add"){
    return this._http.post("http://localhost:8080/api/ucenik",ucenik);
  } else {
    return this._http.put("http://localhost:8080/api/ucenik",ucenik);
  }
  }}
