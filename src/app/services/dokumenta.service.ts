import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dokument } from '../interface/Dokumenta';

@Injectable({
  providedIn: 'root'
})
export class DokumentaService {

  constructor(private _http: HttpClient) { }
  


  allDokumenta(){
    return this._http.get<Dokument[]>("http://localhost:8080/api/dokumenta")
  }

  uploadDoc(document){
    console.log(document);
    let formData: FormData = new FormData();
    formData.append('file',document.file)
    formData.append('dokument',JSON.stringify(document.dokument));
    return this._http.post("http://localhost:8080/api/uploadDoc",formData);
  }
  deleteDoc(id:number){
    return this._http.delete("http://localhost:8080/api/dokument/"+id);
  }

  downloadFile(fileName: string){
    console.log(fileName)
    return this._http.get("http://localhost:8080/api/download/"+fileName, {responseType: 'blob'});
  }
}
